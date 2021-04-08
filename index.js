const inquirer = require("inquirer");

const questions = [
    {
        type: "number",
        message: "What integer would you first like to divide by?",
        name: "firstModulo",
        validate: (input) => {
            return parseInt(input) !== input ? "Please input an integer" : true
        }
    },
    {
        type: "input",
        message: "What should this print when dividing a number by the first number has no remainder?",
        name: "firstOutput",
    },
    {
        type: "number",
        message: "What integer would you next like to divide by?",
        name: "secondModulo",
        validate: (input) => parseInt(input) !== input ? "Please input an integer" : true
    },
    {
        type: "input",
        message: "What should it print when dividing a number by the second number has no remainder?",
        name: "secondOutput",
    },
    {
        type: "input",
        message: "What should it print out if dividing the number by both of the above numbers has no remainder?",
        name: "combinedOutput",
        default: ({firstOutput, secondOutput}) => firstOutput + secondOutput,
    },
    {
        type: "list",
        message: "What should you output when none of the numbers provided evenly divide into the number being tested?",
        name: "defaultOutput",
        choices: [
            {value: "number", name: "The number itself, e.g. 1"},
            {value: "titleNumber", name: "Number: 1"},
            {value: "noDivNumber", name:"No Divisors for 1"}
        ],
    },
]

const fizzBuzz = ({ firstModulo, secondModulo, firstOutput, secondOutput, combinedOutput, defaultOutput }) => {
    firstModulo = parseInt(firstModulo);
    secondModulo = parseInt(secondModulo);
    for(let i = 1; i <= 100; i++){
        const firstCondition = (i % firstModulo === 0);
        const secondCondition = (i % secondModulo === 0);
        let actualDefaultOutput;
        switch(defaultOutput){
            case "titleNumber":
                actualDefaultOutput = "Number: " + i;
                break;
            case "noDivNumber":
                actualDefaultOutput = "No Divisors for " + i;
                break;
            default:
                actualDefaultOutput = i;
                break;
        }
        if(firstCondition && secondCondition){
            console.log(combinedOutput);
        } else if (firstCondition){
            console.log(firstOutput);
        } else if (secondCondition){
            console.log(secondOutput);
        } else {
            console.log(actualDefaultOutput)
        }
    }
}

inquirer.prompt(questions)
    .then( answers=> {
        fizzBuzz(answers);
    })