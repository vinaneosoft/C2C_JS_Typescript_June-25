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
var s1 = "hello";
var s2 = new String('hi');
var ss = "45";
console.log(typeof ss);
var nn = parseInt(ss);
console.log(typeof nn);
var ss2 = new String("56");
console.log(typeof ss2);
