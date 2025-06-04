function addition(num1, num2) {
    return num1 + num2;
}
var result = addition(45, 67);
//addition(45);
//addition(45,67,67888);
//addition("45","67");
function addition2(num1, num2) {
    if (num2 == undefined)
        return num1;
    else
        return num1 + num2;
}
addition2(45);
addition2(45, 78);
function addition3(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    console.log(num1);
    console.log(num2);
    return num1 + num2;
}
console.log(addition3(45));
console.log(addition3(45, 78));
