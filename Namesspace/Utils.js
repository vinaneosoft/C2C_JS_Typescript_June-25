"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
var utils;
(function (utils) {
    function add() {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        return nums.reduce(function (acc, num) { return acc + num; }, 0);
    }
    utils.add = add;
    function subtract() {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        return nums.reduce(function (acc, num) { return acc - num; }, 0);
    }
    utils.subtract = subtract;
})(utils || (exports.utils = utils = {}));
console.log(utils.add(45, 3, 23, 5, 6, 7));
console.log(utils.subtract(45, 3, 23, 5, 6, 7));
