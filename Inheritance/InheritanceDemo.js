var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
        this.employeeId = 0;
        this.employeeName = "AAA";
        this.employeeSalary = 0;
        this.deptCode = 'XYZ';
        console.log("super class");
    }
    Employee.prototype.getDetails = function () {
        return "Employee id : ".concat(this.employeeId, " Name: ").concat(this.employeeName, " Monthly Salary : ").concat(this.employeeSalary);
    };
    return Employee;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer() {
        var _this = this;
        var name = "hari";
        console.log("subclass class");
        _this = _super.call(this) || this; // constructor call, super must be used before this keyword
        _this.variablePay = 0;
        _this.trainerType = 'softsskills';
        _this.variablePay = 0;
        return _this;
    }
    Trainer.prototype.getTotalSalary = function () {
        return this.employeeSalary + this.variablePay;
    };
    Trainer.prototype.test = function () {
        // protected properties from superclass are accessible within subclass body
        console.log(this.deptCode);
    };
    return Trainer;
}(Employee)); // end
var employee1 = new Employee(); // superclass constructor
// subclass can access all visible properties from its superclass
var trainer1 = new Trainer(); // when u create subclass object, superclass object gets created automatically
trainer1.employeeId = 111; // state change
trainer1.employeeName = "Pooja";
trainer1.employeeSalary = 45000;
trainer1.trainerType = "technical";
trainer1.variablePay = 30000;
