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
// create enum Color : RED='hashcode', GREEN='hashcode', BLUE='hashcode'
var arr1 = new Array(); // Array type
arr1.push(56);
arr1.push("hello");
arr1.push(true);
var arr2 = new Array(); // all values of type number
arr2.push(56);
//arr2.push("hello");
var arr3 = new Array(); // all values of type string
//arr3.push(56);
arr3.push("hello");
var arr4 = new Array(); // all values of type string or number
arr4.push(88);
arr4.push(56);
arr4.push("hello");
arr4.push("hi");
arr4.push(12);
var arr5 = new Array(); // all values of type string or number
arr5.push(56);
arr5.push("hello");
var arr6 = new Array(); // all values of type string or number
arr6.push(56);
arr6.push("hello");
// Tuples
//let emps:[number, string]=['hari', 1234]
var emps = [1234, 'hari'];
emps[1] = 'pooja';
console.log(emps);
var emps2 = [1234, 'hari'];
emps2[1] = 'pooja';
console.log(emps2); // mutable
var emps3 = [1234, 'hari'];
//emps3[1]='pooja';   // immutable
console.log(emps3);
