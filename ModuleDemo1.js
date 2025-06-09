"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var account1_1 = require("./Modules/account1");
var account2_1 = require("./Modules/account2");
var account1_2 = require("./Modules/account1"); // no curly braces, direct alias
console.log(account1_1.bankName);
console.log(account2_1.bankName);
console.log(account1_2.default);
// change bankName to Standard Chartered Bank
//bankName="Standard Chartered";
(0, account2_1.changeBank)("Standard Chartered");
console.log(account2_1.bankName);
var emp = new account1_1.Employee();
emp.employeeId = 123;
emp.employeeName = "hari";
//create 2 Trainer objects 
var trainer1 = new account2_1.Trainer(1, "krupa", 45000, 34000);
var trainer2 = new account2_1.Trainer(2, 'vina', 45000, 23000, 'technical trainer');
