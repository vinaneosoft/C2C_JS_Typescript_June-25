"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trainer = exports.bankName = void 0;
exports.changeBank = changeBank;
var account1_1 = require("./account1");
// account2
exports.bankName = "SC";
function changeBank(bank) {
    exports.bankName = bank;
}
// Trainer extends Employee
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
    Trainer.prototype.test = function () {
        this.dname;
    };
    Trainer.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), " Variable Pay: ").concat(this.variablePay, " type: ").concat(this.trainerType);
    };
    return Trainer;
}(account1_1.Employee)); // end
exports.Trainer = Trainer;
var xyz = 'hello';
console.log(xyz);
