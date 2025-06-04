var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
var book1; // user defined type
book1 = new Book();
console.log(book1); // Variable 'book1' is used before being assigned.
console.log(typeof book1); // object
console.log(book1 instanceof Book); // true
console.log(book1 instanceof Employee); // false
console.log(book1 instanceof Object); // true
console.log(book1.toString());
var book2 = new Book();
var obj;
obj = new Object();
var obj2 = new Object();
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
var direction1;
direction1 = Direction.LEFT;
console.log(direction1);
var direction2 = Direction.UP;
console.log(direction2);
console.log(typeof direction1);
