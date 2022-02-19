// # 🎖 Object Creation Patterns

// Create a object using the following patterns given below.

// ## Create in all 4 formats

// - [ ] Using function to create object
// - [ ] Using Object.create (prototypal pattern)
// - [ ] Using Pseudoclassical Way
// - [ ] Using Class

// ## Requirements

// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

// Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

// Factory pattern

// function createUser(name, id, noOfProjects) {
//     let user = {};
//     user.username = name;
//     user.userID = id;
//     user.projects = noOfProjects;

//     user.getProjects = function() {
//         return user.projects;
//     }
//     user.changeName = function(newName) {
//         return user.username;
//     }
//     user.incrementProject = function(value = 1) {
//         user.projects = user.projects + value;
//         return user.projects;
//     }
//     user.derementProject = function(value = 1) {
//         user.projects = user.projects - value;
//         return user.projects;
//     }

//     return user;
// }

// Prototypal pattern

// let userMethods = {
//     getProjects: function() {
//         return this.projects;
//     },
//     changeName: function(newName) {
//         return this.username;
//     },
//     incrementProject: function(value = 1) {
//         this.projects = this.projects + value;
//         return this.projects;
//     },
//     derementProject: function(value = 1) {
//         this.projects = this.projects - value;
//         return this.projects;
//     }

// }

// function createUser(name, id, noOfProjects) {
//     let user = Object.create(userMethods);
//     user.username = name;
//     user.userID = id;
//     user.projects = noOfProjects;

//     return user;
// }


// Pseudoclassical pattern 

// function CreateUser(name, id, noOfProjects) {
//     this.username = name;
//     this.userID = id;
//     this.projects = noOfProjects;
// }

// CreateUser.prototype = {
//     getProjects() {
//         return this.projects;
//     },
//     changeName(newName) {
//         return this.username;
//     },
//     incrementProject(value = 1) {
//         this.projects = this.projects + value;
//         return this.projects;
//     },
//     derementProject(value = 1) {
//         this.projects = this.projects - value;
//         return this.projects;
//     }
// }


// Classical pattern

class User {
    constructor(name, id, noOfProjects) {
        this.username = name;
        this.userID = id;
        this.projects = noOfProjects;
    }
    getProjects() {
        return this.projects;
    }
    changeName(newName) {
        return this.username;
    }
    incrementProject(value = 1) {
        this.projects = this.projects + value;
        return this.projects;
    }
    derementProject(value = 1) {
        this.projects = this.projects - value;
        return this.projects;
    }
}

const user1 = new User(`Mridul`, `bukraatboy69`, 467);
const user2 = new User(`Karaleigh`, `parkgirl33`, 7);


console.group(user1.username);
console.log(user1.userID);
console.log(user1.projects);
console.log(user1.changeName(`Singhai`));
console.log(user1.incrementProject(23));
console.log(user1.derementProject(55));
console.groupEnd();

console.group(user2.username);
console.log(user2.userID);
console.log(user2.projects);
console.log(user2.changeName(`Singhai`));
console.log(user2.incrementProject(7));
console.log(user2.derementProject(4));
console.groupEnd();
