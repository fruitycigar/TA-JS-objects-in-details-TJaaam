// # Inheritance

// Convert the below requirements into inheritance using:

// - Pseudoclassical Pattern
// - Class Pattern

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

// Pseudoclassical Pattern

// function CreateAnimal(location, numberOfLegs) {
//     this.location = location;
//     this.numberOfLegs = numberOfLegs;
// }

// CreateAnimal.prototype = {
//     eat() {
//         console.log(`I live in ${this.location} and I can eat.`);
//     },
//     changeLocation(newLocation) {
//         this.location = newLocation;
//         return this.location;
//     },
//     summary() {
//         return `I live in ${this.location} and I have ${this.numberOfLegs} legs.`;
//     }
// }

// function CreateDog(location, numberOfLegs, name, color) {
//     CreateAnimal.call(this, location, numberOfLegs);
//     this.name = name;
//     this.color = color;
// }

// CreateDog.prototype = {
//     bark() {
//         alert(`I am {this.name} and I can bark.`);
//     },
//     changeName(newName) {
//         this.name = newName;
//         return this.name;
//     },
//     changeColor(newColor) {
//         this.color = newColor;
//         return this.color;
//     },
//     summary() {
//         return `I am ${this.name} and I have a ${this.color}-colored coat. I can bark too!`
//     }
// }

// Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);

// function CreateCat(location, numberOfLegs, name, eyeColor) {
//     CreateAnimal.call(this, location, numberOfLegs);
//     this.name = name;
//     this.eyeColor = eyeColor;
// }

// CreateCat.prototype = {
//     meow() {
//         alert(`I am {this.name} and I can meow.`);
//     },
//     changeName(newName) {
//         this.name = newName;
//         return this.name;
//     },
//     changeEyeColor(newEyeColor) {
//         this.eyecolor = newEyeColor;
//         return this.eyeColor;
//     },
//     summary() {
//         return `I am ${this.name} and I have ${this.eyeColor} eyes. I can mew too. Like the Pokèmon.`
//     }
// }

// Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);

// let dog = new CreateDog(`Maine`, 4, `bud`, `white`);
// let cat = new CreateCat(`Arizona`, 4, `Jet`, `Green`);

// Classical pattern

class Animal {
    constructor(location, numberOfLegs) {
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat() {
        console.log(`I live in ${this.location} and I can eat.`);
    }
    changeLocation(newLocation) {
        this.location = newLocation;
        return this.location;
    }
    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs.`;
    }
}

class Dog extends Animal {
    constructor(location, numberOfLegs, name, color) {
        super(location, numberOfLegs);
        this.name = name;
        this.color = color;
    }
    bark() {
        alert(`I am ${this.name} and I can bark.`);
    }
    changeName(newName) {
        this.name = newName;
        return this.name;
    }
    changeColor(newColor) {
        this.color = newColor;
        return this.color;
    }
    summary() {
        return `I am ${this.name} and I have a ${this.color}-colored coat. I can bark too!`
    }
}

class Cat extends Animal {
    constructor(location, numberOfLegs, name, eyeColor) {
        super(location, numberOfLegs);
        this.name = name;
        this.eyeColor = eyeColor;
    }
    meow() {
        alert(`I am ${this.name} and I can meow.`);
    }
    changeName(newName) {
        this.name = newName;
        return this.name;
    }
    changeEyeColor(newEyeColor) {
        this.eyecolor = newEyeColor;
        return this.eyeColor;
    }
    summary() {
        return `I am ${this.name} and I have ${this.eyeColor} eyes. I can mew too. Like the Pokèmon.`
    }
}

let dog = new Dog(`Maine`, 4, `bud`, `white`);
let cat = new Cat(`Arizona`, 4, `Jet`, `Green`);