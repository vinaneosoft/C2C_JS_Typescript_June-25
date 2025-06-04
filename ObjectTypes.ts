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

// create enum Color : RED='hashcode', GREEN='hashcode', BLUE='hashcode'




let arr1=new Array();  // Array type
arr1.push(56);
arr1.push("hello");
arr1.push(true);

let arr2:number[]=new Array();   // all values of type number
arr2.push(56);
//arr2.push("hello");

let arr3=new Array<string>();   // all values of type string
//arr3.push(56);
arr3.push("hello");


let arr4=new Array<string | number>();   // all values of type string or number
arr4.push(88);
arr4.push(56);
arr4.push("hello");
arr4.push("hi");
arr4.push(12);

let arr5:number[] | string[]=new Array(); // all values of type string or number
(arr5 as number[]).push(56);
(arr5 as string[]).push("hello");

let arr6:(number|string)[]=new Array(); // all values of type string or number
arr6.push(56);
arr6.push("hello");


// Tuples

//let emps:[number, string]=['hari', 1234]
let emps:[number, string]=[1234, 'hari']
emps[1]='pooja'
console.log(emps);

let emps2:readonly [number, string]=[1234, 'hari']
//emps2[1]='pooja'; // immutable
console.log(emps2); 

let emps3=[1234, 'hari'] as const
//emps3[1]='pooja';   // immutable
console.log(emps3);