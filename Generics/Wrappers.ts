


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
let b3=new Boolean("hi");
console.log(b3); // true returned for any value other than false




let s1="hello";
console.log(typeof s1);

let s2=new String('hello');
console.log(typeof s2);


let conts=s1+" hi";
console.log(s1);
console.log(conts);

s1=s1.concat(" welcome");
console.log(s1);  // reference variable is same which was pointing to original string

const ss1='india';
const ss2='india';
const ss3='INDIA';

console.log(ss1==ss2); // true
console.log(ss1.valueOf()==ss2.valueOf()); //true
if(s1==s2)
        console.log("both string are equal");


let ss4=new String('india');
let ss5=new String('india');
        
console.log(ss4==ss5); // false
console.log(ss4.valueOf()==ss5.valueOf()); // true

if(ss4.valueOf()==ss5.valueOf())
        console.log("both strings are equal");
else
    console.log("both string are not equal");
    
        