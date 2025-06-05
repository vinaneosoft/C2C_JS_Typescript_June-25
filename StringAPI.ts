let s1="hello"
let s2="hello";
let s3=new String("hello");
let s4=new String("hello");

console.log(s1==s2);
console.log(s1.valueOf()==s2.valueOf());
console.log(s3==s4); // false
console.log(s3.valueOf()==s4.valueOf());
// when u compare objects using == it compares memory location
let num1=56;
let num2=56;