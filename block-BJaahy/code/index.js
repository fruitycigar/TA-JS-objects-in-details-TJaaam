// # More about class

// - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

// - Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`

// - Create another method named `calcArea` that will return the area of the square.

// - Create a getter method named `area` that will return area of the square.

// - Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))

// - Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)

// - Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)

// - Check the `area` getter method on both square.

// - Check the `isEqual` method and pass the two instance you created above.

class Square {
    constructor (side) {
        let width = side;
        let height = side;
    }

    description() {
        alert `The square is ${width} x ${height}.`;
    }

    calcArea() {
        return ${width} * ${height};
    }

    get area() {
        return `${width} * ${height}`;
    }

    set area(value) {
        let width = Math.sqrt(value);
        let height = Math.sqrt(value);
    }

    static isEqual(side1, side2) {
        return side1 === side2;
    }
    
}

let s1 = new Square(4);
let s2 = new Square(7);

s1.area();
s2.area();

Square.isEqual(4, 7);