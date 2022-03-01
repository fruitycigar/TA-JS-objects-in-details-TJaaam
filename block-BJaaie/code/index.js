// Pseudoclassical pattern

// function CreateAnimal(location, numberOfLegs) {
//     this.location = location;
//     this.numberOfLegs = numberOfLegs;
// }

// CreateAnimal.prototype = {
//     eat: function() {
//         console.log(`I live in ${this.location} and I can eat.`)
//     },
//     changeLocation: function(newLocation) {
//         this.location = newLocation;
//         return newLocation;
//     },
//     summary: function() {
//         return `I live in ${this.location} and I have ${this.numberOfLegs} legs.`
//     }
// }

// function CreateDog(location, numberOfLegs, name, color) {
//     CreateAnimal.apply(this, [location, numberOfLegs]);
//     this.name = name;
//     this.color = color;
// }

// CreateDog.prototype = {
//     bark: function() {
//         alert(`I am ${this.name} and I can bark 🐩`);
//     },
//     changeName: function(newName) {
//         this.name = newName;
//         return newName;
//     },
//     changeColor: function(newColor) {
//         this.color = newColor;
//         return newColor;
//     },
//     summary: function() {
//         return `I am ${this.name} and my fur is ${this.color}-colored. I can also bark.`
//     }
// }

// Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);

// function CreateCat(location, numberOfLegs, name, colorOfEyes) {
//     CreateAnimal.apply(this, [location, numberOfLegs]);
//     this.name = name;
//     this.colorOfEyes = colorOfEyes;
// }

// CreateCat.prototype = {
//     meow: function() {
//         alert(`I am ${this.name} and I can go meow-meow.`);
//     },
//     changeName: function(newName) {
//         this.name = newName;
//         return newName;
//     },
//     changeColorOfEyes: function(newColor) {
//         this.colorOfEyes = newColor;
//         return newColor;
//     },
//     summary: function() {
//         return `I am ${this.name} and my eyes are ${this.colorOfEyes}. It just so happens that I can also go meow-meow.`;
//     }
// }

// Classical Pattern

class CreateAnimal {
    constructor(location, numberOfLegs) {
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat() {
        console.log(`I live in ${this.location} and I can eat.`)
    }
    changeLocation(newLocation) {
        this.location = newLocation;
        return newLocation;
    }
    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs.`
    }
}

class CreateDog extends CreateAnimal {
    constructor(location, numberOfLegs, name, color) {
        super(location, numberOfLegs);
        this.name = name;
        this.color = color;
    }
    bark() {
        alert(`I am ${this.name} and I can bark 🐩`);
    }
    changeName(newName) {
        this.name = newName;
        return newName;
    }
    changeColor(newColor) {
        this.color = newColor;
        return newColor;
    }
    summary() {
        return `I am ${this.name} and my fur is ${this.color}-colored. I can also bark.`
    }
}

class CreateCat extends CreateAnimal {
    constructor(location, numberOfLegs, name, colorOfEyes) {
        super(location, numberOfLegs);
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow() {
        alert(`I am ${this.name} and I can go meow-meow.`);
    }
    changeName(newName) {
        this.name = newName;
        return newName;
    }
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
        return newColor;
    }
    summary() {
        return `I am ${this.name} and my eyes are ${this.colorOfEyes}. It just so happens that I can also go meow-meow.`;
    }
}