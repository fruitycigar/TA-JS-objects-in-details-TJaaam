// Without object

// Data 1

// let question1 = `What is the most profitable company in India?`

// let options = [`RIL`, `Tata Sons`, `Haldiram's`, `Infosys`];

// let correctAnswerIndex = 0;

// Methods 1

// function isAnswerCorrect(index) {
//     return index === correctAnswerIndex;
// }

// function getCorrectAnswer() {
//     return options[correctAnswerIndex];
// }

// Organizing using an object

// let question = {
//     title: `What is the most profitable company in India?`,
//     options: [`RIL`, `Tata Sons`, `Haldiram's`, `Infosys`],
//     correctAnswerIndex: 0,
//     isAnswerCorrect: function(index) {
//         return index === question.correctAnswerIndex;
//     },
//     getCorrectAnswer: function() {
//         return question.options[question.correctAnswerIndex];
//     }
// }

// Object creation using a function

// function createQuestion(title, optionsArr, correctAnsIndex) {
//     let obj = {};
//     obj.title = title;
//     obj.options = optionsArr;
//     obj.correctAnswerIndex = correctAnsIndex;
//     obj.isAnswerCorrect = function(index) {
//         return index === correctAnsIndex;
//     };
//     obj.getCorrectAnswer = function() {
//         return optionsArr[correctAnsIndex];
//     }
//     return obj;
// }

// let question = createQuestion(`What is the most profitable company in India?`, [`RIL`, `Tata Sons`, `Haldiram's`, `Infosys`], 0);

// Using `this`

function createQuestion(title, optionsArr, correctAnsIndex) {
    let obj = {};
    obj.title = title;
    obj.options = optionsArr;
    obj.correctAnswerIndex = correctAnsIndex;
    obj.isAnswerCorrect = function(index) {
        return index === this.correctAnswerIndex;
    };
    obj.getCorrectAnswer = function() {
        return this.options[this.correctAnswerIndex];
    }
    return obj;
}

let question = createQuestion('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);