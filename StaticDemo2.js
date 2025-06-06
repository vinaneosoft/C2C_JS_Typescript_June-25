"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StaticDemo_1 = require("./StaticDemo");
var Bank = /** @class */ (function () {
    function Bank() {
    }
    Bank.showBankAccount = function (acc) {
        // static method:  static memebers via classname, this
        // static method : non static members via this : no, via obj : yes
        console.log("in static method of Bank", acc.accountType);
    };
    return Bank;
}());
var account7 = new StaticDemo_1.BankAccount();
Bank.showBankAccount(account7);
var account8 = new StaticDemo_1.BankAccount("current");
Bank.showBankAccount(account8);
