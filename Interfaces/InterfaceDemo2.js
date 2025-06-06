var NeoDeveloper = /** @class */ (function () {
    function NeoDeveloper() {
    }
    NeoDeveloper.prototype.getSalary = function () {
        //impl
    };
    return NeoDeveloper;
}());
var NeoTrainer = /** @class */ (function () {
    function NeoTrainer() {
    }
    NeoTrainer.prototype.getSalary = function () {
        //impl
    };
    NeoTrainer.prototype.getVariablePay = function () {
        //impl
    };
    return NeoTrainer;
}());
var emp;
emp = new NeoDeveloper();
emp = new NeoTrainer();
console.log(emp.trainerType);
