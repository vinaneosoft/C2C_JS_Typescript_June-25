class Employee{
}

class Book{
    bookId;bookName;bookPrice;
}
let book1:Book;    // user defined type
book1=new Book();
console.log(book1); // Variable 'book1' is used before being assigned.
console.log(typeof book1); // object
console.log(book1 instanceof Book); // true
console.log(book1 instanceof Employee); // false
console.log(book1 instanceof Object); // true
console.log(book1.toString());

let book2=new Book();
 
let obj:Object
obj=new Object();

let obj2=new Object();


enum Direction{
    UP, DOWN, LEFT, RIGHT
}

let direction1:Direction
direction1=Direction.LEFT;
console.log(direction1);

let direction2=Direction.UP;
console.log(direction2);
console.log(typeof direction1);

