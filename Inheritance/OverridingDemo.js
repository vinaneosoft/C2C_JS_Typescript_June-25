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
    function Employee(employeeId, employeeName, employeeSalary) {
        if (employeeId === void 0) { employeeId = 0; }
        if (employeeName === void 0) { employeeName = "AAA"; }
        if (employeeSalary === void 0) { employeeSalary = 0; }
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeSalary = employeeSalary;
        console.log("super class");
    }
    Employee.prototype.getDetails = function () {
        console.log("super method");
        return "Employee id : ".concat(this.employeeId, " Name: ").concat(this.employeeName, " Monthly Salary : ").concat(this.employeeSalary);
    };
    return Employee;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(empId, empName, empSalary, variablePay, trainerType) {
        if (empId === void 0) { empId = 0; }
        if (empName === void 0) { empName = ""; }
        if (empSalary === void 0) { empSalary = 0; }
        if (variablePay === void 0) { variablePay = 0; }
        if (trainerType === void 0) { trainerType = 'softskills trainer'; }
        var _this = _super.call(this, empId, empName, empSalary) || this;
        _this.variablePay = variablePay;
        _this.trainerType = trainerType;
        return _this;
    }
    Trainer.prototype.getTotalSalary = function () {
        return this.employeeSalary + this.variablePay;
    };
    Trainer.prototype.getDetails = function () {
        console.log("sub method");
        return "Employee id : ".concat(this.employeeId, " Name: ").concat(this.employeeName, " Monthly Salary : ").concat(this.employeeSalary, "\n        Variable Pay: ").concat(this.variablePay, " type: ").concat(this.trainerType);
    };
    return Trainer;
}(Employee)); // end
var employee1 = new Employee(2, "hari", 45000);
console.log(employee1.getDetails());
var trainer1 = new Trainer(1, "krupa", 45000, 34000); // employee object
var trainer2 = new Trainer(2, 'vina', 45000, 23000, 'technical trainer');
console.log(trainer1.getDetails()); // inherited overriding method // dynamic polymorphism
