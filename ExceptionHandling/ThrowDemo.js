/* try with muitple catch not allowed */
function getLength(value) {
    try {
        console.log("code before length display......");
        if (value == undefined)
            throw new TypeError("value is undefined...."); // catch
        console.log(value.length);
        console.log("code after length display......");
    }
    finally {
        console.log("calleed finally block...");
    }
    console.log('...below..finally....');
}
function add() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, num) { return acc + num; }, 0);
}
getLength("hello");
console.log("--------");
try {
    getLength(undefined);
}
catch (error) {
    console.log("caller side");
    console.log(error);
}
finally {
    console.log("caller finally block....");
}
console.log("--------");
console.log(add(45, 3, 2, 4, 56));
