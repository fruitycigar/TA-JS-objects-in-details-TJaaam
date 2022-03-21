// Using function to create object

// function createUser(name, id, noOfProjects) {
//     let user = {};
//     user.name = name;
//     user.id = id;
//     user.noOfProjects = noOfProjects;

    // user.getProjects = function() {
    //     return user.noOfProjects;
    // }
    // user.changeName = function(newName) {
    //     user.name = newName;
    //     return user.name;
    // }
    // user.incrementProject = function(value = 1) {
    //     user.noOfProjects = user.noOfProjects + value;
    //     return user.noOfProjects;
    // }
    // user.decrementProject = function(value = 1) {
    //     user.noOfProjects = user.noOfProjects - value;
    //     return user.noOfProjects;
    // }

//     return user;
// }

// Prototypal pattern

// function createUser(name, id, noOfProjects) {
//     let user = Object.create(userMethods); // to be replaced later with userMethods
//     user.name = name;
//     user.id = id;
//     user.noOfProjects = noOfProjects;

//     return user;
// }

// let userMethods = {
//     getProjects: function() {
//         return this.noOfProjects;
//     },
//     changeName: function(newName) {
//         this.name = newName;
//         return this.name;
//     },
//     incrementProject: function(value = 1) {
//         this.noOfProjects = this.noOfProjects + value;
//         return this.noOfProjects;
//     },
//     decrementProject: function(value = 1) {
//         this.noOfProjects = this.noOfProjects - value;
//         return this.noOfProjects;
//     }
// }

// Pseudoclassical Pattern

// function CreateUser(name, id, noOfProjects) {
//     this.name = name;
//     this.id = id;
//     this.noOfProjects = noOfProjects;
// }

// CreateUser.prototype = {
//     getProjects: function() {
//         return this.noOfProjects;
//     },
//     changeName: function(newName) {
//         this.name = newName;
//         return this.name;
//     },
//     incrementProject: function(value = 1) {
//         this.noOfProjects = this.noOfProjects + value;
//         return this.noOfProjects;
//     },
//     decrementProject: function(value = 1) {
//         this.noOfProjects = this.noOfProjects - value;
//         return this.noOfProjects;
//     }
// }

// Using Class

class User {

    constructor(name, id, noOfProjects) {
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }
    getProjects() {
        return this.noOfProjects;
    }
    changeName(newName) {
        this.name = newName;
        return this.name;
    }
    incrementProject(value = 1) {
        this.noOfProjects = this.noOfProjects + value;
        return this.noOfProjects;
    }
    decrementProject(value = 1) {
        this.noOfProjects = this.noOfProjects - value;
        return this.noOfProjects;
    }

}

const user1 = new User(`Mridul`, `bukraatboy69`, 467);
const user2 = new User(`Karaleigh`, `parkgirl33`, 7);

console.group(user1.name);
console.log(user1.id);
console.log(user1.noOfProjects);
console.log(user1.changeName(`Singhai`));
console.log(user1.incrementProject(23));
console.log(user1.decrementProject(55));
console.groupEnd();

console.group(user2.name);
console.log(user2.id);
console.log(user2.noOfProjects);
console.log(user2.changeName(`Singhai`));
console.log(user2.incrementProject(7));
console.log(user2.decrementProject(4));
console.groupEnd();