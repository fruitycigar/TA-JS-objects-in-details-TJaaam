// # More about class

// - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.


// - Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`


// - Create another method named `calcArea` that will return the area of the square.


// - Create a getter method named `area` that will return area of the square.


// - Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))

// - Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)

class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }
    description() {
        alert(`The square is ${this.width} x ${this.height}.`);
    }
    calcArea() {
        return `The area of the square is ${this.width ** 2}.`;
    }
    get area() {
        return this.calcArea();
    }
    set area(newArea) {
        let newSide = Math.sqrt(newArea);
        this.width = newSide;
        this.height = newSide;
        return newSide;
    }
    static isEqual(sq1, sq2) {
        return sq1.area === sq2.area;
    }
}

// - Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)

let s1 = new Square(7);
let s2 = new Square(22);

// - Check the `area` getter method on both square.

s1.area;
s2.area;

// - Check the `isEqual` method and pass the two instance you created above.

console.log(Square.isEqual(s1, s2));
