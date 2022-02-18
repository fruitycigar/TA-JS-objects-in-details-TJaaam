// ### For single question we need the following data and methods:

// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

// ### Create the object using the following ways

// For each different ways of creating object write different solutions.

// - Without Object
// - Organize using object
// - Use a function to create object
// - Convert the function to use `this` keyword
// - Write test by creating two objects also test both methods.

// Without Object

// let question1 = `What is Ankit's favorite TV show?`;
// let options1 = [`Game of Thrones`, `The X-Files`, `Breaking Bad`, `House M.D`];
// let correctAnswerIndex = 0;

// function isAnswerCorrect(index) {
//     if(index === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function getCorrectAnswer() {
//     return `The correct answer is ${options1[0]}.`;
// }

// Organize using object

// let question = {
//     title: `What is Ankit's favorite TV show?`,
//     options: [`Game of Thrones`, `The X-Files`, `Breaking Bad`, `House M.D`],
//     isAnswerCorrect: function(index) {
//         if(index === 0) {
//             return true;
//         } else {
//             return false;
//         }
//     },
//     getCorrectAnswer: function() {
//         return `The correct answer is ${question.options[0]}.`;
//     }
// };

// - Use a function to create object

// function createQuestion(title, options, correctIndex) {
//     let question = {};
//     question.title = title;
//     question.options = options;
//     question.isAnswerCorrect = function(index) {
//         if (index === correctIndex) {
//             return true;
//         } else {
//             return false;
//         }
//     };
//     question.getCorrectAnswer = function() {
//         return `The correct answer is ${options[correctIndex]}.`;
//     }
//     return question;
// }

// let question1 = createQuestion(`What is Ankit's favorite show?`, [`Game of Thrones`, `The X-Files`, `Breaking Bad`, `House M.D`], 0);


// - Convert the function to use `this` keyword (Have a problem here)

function createQuestion(title, options, correctIndex) {
    let question = {};
    question.title = title;
    question.options = options;
    question.isAnswerCorrect = function(index) {
        if (index === correctIndex) {
            return true;
        } else {
            return false;
        }
    };
    question.getCorrectAnswer = function() {
        return `The correct answer is ${options[correctIndex]}.`;
    }
    return question;
}

let question1 = createQuestion(`What is Ankit's favorite show?`, [`Game of Thrones`, `The X-Files`, `Breaking Bad`, `House M.D`], 0);

// - Write test by creating two objects also test both methods. (Need help here as well.)