function getLength(value) {
    try {
        console.log("code before length display......");
        console.log(value.length);
        console.log("code after length display......");
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("this code will execute though execption occurs or not.....");
    }
    console.log('...below...catch....');
}
function add() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, num) { return acc + num; }, 0);
}
getLength("hello");
getLength(undefined);
console.log(add(45, 3, 2, 4, 56));
