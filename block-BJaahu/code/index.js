// Prototypal Pattern

// let questionMethods = {
//     isAnswerCorrect: function(index) {
//         return index === this.correctAnswerIndex;
//     },
//     getCorrectAnswer: function() {
//         return `The correct answer is ${this.options[this.correctAnswerIndex]}.`;
//     }
// }


// function createQuestion(title, options, correctAnswerIndex) {
//     let question = Object.create(questionMethods);
//     question.title = title;
//     question.options = options;
//     question.correctAnswerIndex = correctAnswerIndex;

//     return question;
// }

// Pseudoclassical pattern

// function Question(title, options, correctAnswerIndex) {
//     this.title = title;
//     this.options = options;
//     this.correctAnswerIndex = correctAnswerIndex;
// }

// Question.prototype = {
//     isAnswerCorrect (index) {
//         return index === this.correctAnswerIndex;
//     },
//     getCorrectAnswer() {
//         return `The correct answer is ${this.options[this.correctAnswerIndex]}.`;
//     }
// }

//   Classical pattern

class Question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isAnswerCorrect (index) {
        return index === this.correctAnswerIndex;
    }
    getCorrectAnswer() {
        return `The correct answer is ${this.options[this.correctAnswerIndex]}.`;
    }
}

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );