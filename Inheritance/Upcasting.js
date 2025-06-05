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
    Employee.prototype.test = function () {
    };
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
        // this.getTotalSalary();
        // this.test(); // inherited method
        // super.getDetails();
        return "".concat(_super.prototype.getDetails.call(this), " Variable Pay: ").concat(this.variablePay, " type: ").concat(this.trainerType);
    };
    return Trainer;
}(Employee)); // end
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.developmentTechnology = 'JAVA';
        _this.currentProject = 'SVC';
        return _this;
    }
    Developer.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), " Technlogy for Dev: ").concat(this.developmentTechnology, " Current Project : ").concat(this.currentProject);
    };
    return Developer;
}(Employee));
/*
rules :
method name and parameter list must be same
scope : same, increase  can not decrease
return type primitive : then same
return type void : then u can change in subclass method
return type is object : then u can return covarient*/
var employee;
employee = new Trainer();
console.log(employee.getDetails());
employee = new Developer();
console.log(employee.getDetails());
// Employee, Trainer, Developer
var e1 = new Employee(1);
var tr = new Trainer(2);
var dev = new Developer(3);
function meeting(emp) {
    console.log(emp.employeeId);
    console.log(emp.getDetails());
}
meeting(e1);
meeting(tr);
meeting(dev);
