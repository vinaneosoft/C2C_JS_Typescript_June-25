"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clocation = exports.Employee = exports.bankName = void 0;
// module name : account1
exports.bankName = "Axis";
// Employee
var Employee = /** @class */ (function () {
    function Employee(employeeId, employeeName, employeeSalary) {
        if (employeeId === void 0) { employeeId = 0; }
        if (employeeName === void 0) { employeeName = "AAA"; }
        if (employeeSalary === void 0) { employeeSalary = 0; }
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeSalary = employeeSalary;
        this.dname = "JS";
        console.log("super class");
    }
    Employee.prototype.getDetails = function () {
        console.log("super method");
        return "Employee id : ".concat(this.employeeId, " Name: ").concat(this.employeeName, " Monthly Salary : ").concat(this.employeeSalary);
    };
    return Employee;
}());
exports.Employee = Employee;
var companyName = "Neosoft";
exports.default = companyName;
exports.clocation = "Dadar";
// export default clocation; /* A module cannot have multiple default exports. */
