var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.getDetails = function () {
    };
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
var obj;
obj = new Object();
