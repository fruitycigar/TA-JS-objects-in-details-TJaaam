class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat() {
        console.log(`I can eat, a lot.`);
    }
    sleep() {
        console.log(`I can also sleep, but not a lot.`);
    }
    walk() {
        console.log(`Walking is life, and I can walk.`);
    }
}

class Player extends Person {
    constructor(name, age, gender, sportsName) {
        super(name, age, gender);
        this.sportsName = sportsName;
    }
    play() {
        console.log(`My name is ${this.name} and I play ${this.sportsName}.`);
    }
}

class Cricketer extends Player {
    constructor(name, age, gender, teamName) {
        super(name, age, gender);
        this.teamName = teamName;
        this.sportsName = `cricket`;
    }
}

class Teacher extends Person {
    constructor(name, age, gender, instituteName) {
        super(name, age, gender);
        this.institute = instituteName;
    }
    teach() {
        console.log(`My name is ${this.name} and I teach.`)
    }
}

class Artist extends Teacher {
    constructor(name, age, gender, kind) {
        super(name, age, gender);
        this.kind = kind;
    }
    createArt() {
        console.log(`My name is ${this.name} and I make art. Lol.`);
    }
}

let bane = new Person(`Bane`, 26, `male`);
let raji = new Teacher(`Raji`, 26, 'female', 'AltCampus');
let ranjit = new Player(`Ranjit`, 33, 'male', 'tennis');
let ajay = new Cricketer('Ajay', 22, 'male', `Gujarat Lions`);
let sophie = new Artist(`Sophie`, 34, 'female', `Actor`);