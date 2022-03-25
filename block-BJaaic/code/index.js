// # Inheritance

// Convert the below requirements into inheritance using prototypal patterns.

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

let animalMethods = {
    eat() {
        console.log(`I live in ${this.location} and I can eat.`);
    },
    changeLocation(newLocation) {
        this.location = newLocation;
        return this.location;
    },
    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs.`;
    }
}

function createAnimal(location, numberOfLegs) {
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}

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

let dogMethods = {
    bark() {
        alert(`I am ${this.name} and I can bark 🐶.`);
    },
    changeName(newName) {
        this.name = newName;
        return this.name;
    },
    changeColor(newColor) {
        this.color = newColor;
        return this.color;
    },
    summary() {
        return `I am ${this.name} and I have a ${this.color} colored coat. I can also bark!`;
    }
}

function createDog(location, numberOfLegs, name, color) {
    let dog = Object.create(dogMethods);
    dog.location = location;
    dog.numberOfLegs = numberOfLegs;
    dog.name = name;
    dog.color = color;
    return dog;
}

Object.setPrototypeOf(dogMethods, animalMethods);

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the cat.

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the cat.

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

let catMethods = {
    meow() {
        alert(`I am ${this.name} and I can mew you to hell 🐈‍⬛`);
    },
    changeName(newName) {
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes(newColor) {
        this.eyeColor = newColor;
        return this.eyeColor;
    },
    summary() {
        return `I am ${this.name} and I have ${this.eyeColor}-colored eyes. I can also mew you to hell (and back).`;
    }
}

function createCat(location, numberOfLegs, name, eyeColor) {
    let cat = Object.create(catMethods);
    cat.location = location;
    cat.numberOfLegs = numberOfLegs;
    cat.name = name;
    cat.eyeColor = eyeColor;
    return cat;
}

Object.setPrototypeOf(catMethods, animalMethods);
