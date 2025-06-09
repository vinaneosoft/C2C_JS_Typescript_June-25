


let num:number;
num=45;
console.log(typeof num);

let num2=new Number(56);
console.log(typeof num2);
console.log(num2 instanceof Number);

let numsarray:number[]=[56,45,23,78,12, /* new Number(23) */];
let numsarray2:Number[]=[34,12,56,78, new Number(12)]

for(let no of numsarray2){
    console.log(typeof no);
}

let b1:boolean=true;
b1=false;
let b2=new Boolean(false);
console.log(typeof b2);
b2=true; 
console.log(typeof b2);
b2=new Boolean(true); // this is only the way to change wrapper value
// immutable 
let barray:Boolean[]=[true, false, new Boolean(true), new Boolean(false)]

let s1="hello";
let s2=new String('hi');

let ss="45";
console.log(typeof ss);
let nn=parseInt(ss);
console.log(typeof nn);

let ss2=new String("56");
console.log(typeof ss2);
