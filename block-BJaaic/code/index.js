let animalMethods = {
    eat: function() {
        console.log(`I live in ${this.location} and I can eat.`)
    },
    changeLocation: function(newLocation) {
        this.location = newLocation;
    },
    summary: function() {
        return `I live in ${this.location} and I have ${this.numberoflegs}.`
    }
}

function createAnimal(location, numberOfLegs = 4) {
    let animal = Object.create(animalMethods); //(update to animalMethods)
    animal.location = location;
    animal.numberoflegs = numberOfLegs;
    return animal;
}

let dogMethods = {
    bark: function() {
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName: function(newName) {
        this.name = newName;
    },
    changeColor: function(newColor) {
        this.color = newColor;
    },
    summary: function() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark.`
    }
}

Object.setPrototypeOf(dogMethods, animalMethods);

function createDog(location, numberOfLegs = 4, name, color) {
    let animal = Object.create(animalMethods); //(update to animalMethods)
    animal.location = location;
    animal.numberoflegs = numberOfLegs;
    animal.name = name;
    animal.color = color;
    return animal;
}

let catMethods = {
    meow: function() {
        alert(`I am ${this.name} and I can do mew you to hell 😹`);
    },
    changeName: function(newName) {
        this.name = newName;
    },
    changeColorOfEyes: function(newColor) {
        this.eyecolor = newColor;
    },
    summary: function() {
        return `I am ${this.name} and the color of my eyes are ${this.eyecolor}. I can also go meow-meow.`;
    }

}

Object.setPrototypeOf(catMethods, animalMethods);

function createCat(location, numberOfLegs = 4, name, colorOfeyes) {
    let animal = Object.create(animalMethods); //(update to animalMethods)
    animal.location = location;
    animal.numberoflegs = numberOfLegs;
    animal.name = name;
    animal.eyecolor = colorOfeyes;
    return animal;
}