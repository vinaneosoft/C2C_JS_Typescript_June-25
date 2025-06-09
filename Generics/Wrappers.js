var num;
num = 45;
console.log(typeof num);
var num2 = new Number(56);
console.log(typeof num2);
console.log(num2 instanceof Number);
var numsarray = [56, 45, 23, 78, 12, /* new Number(23) */];
var numsarray2 = [34, 12, 56, 78, new Number(12)];
for (var _i = 0, numsarray2_1 = numsarray2; _i < numsarray2_1.length; _i++) {
    var no = numsarray2_1[_i];
    console.log(typeof no);
}
var b1 = true;
b1 = false;
var b2 = new Boolean(false);
console.log(typeof b2);
b2 = true;
console.log(typeof b2);
b2 = new Boolean(true); // this is only the way to change wrapper value
// immutable 
var barray = [true, false, new Boolean(true), new Boolean(false)];
var b3 = new Boolean("hi");
console.log(b3); // true returned for any value other than false
var s1 = "hello";
console.log(typeof s1);
var s2 = new String('hello');
console.log(typeof s2);
var conts = s1 + " hi";
console.log(s1);
console.log(conts);
s1 = s1.concat(" welcome");
console.log(s1); // reference variable is same which was pointing to original string
var ss1 = 'india';
var ss2 = 'india';
var ss3 = 'INDIA';
console.log(ss1 == ss2); // true
console.log(ss1.valueOf() == ss2.valueOf()); //true
if (s1 == s2)
    console.log("both string are equal");
var ss4 = new String('india');
var ss5 = new String('india');
console.log(ss4 == ss5); // false
console.log(ss4.valueOf() == ss5.valueOf()); // true
