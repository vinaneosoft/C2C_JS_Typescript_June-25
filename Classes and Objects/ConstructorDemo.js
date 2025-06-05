var BankAccount = /** @class */ (function () {
    // Multiple constructor implementations are not allowed.
    // p- constructor
    function BankAccount(acctype, accbal, custname, custid, accnum) {
        if (acctype === void 0) { acctype = 'savings'; }
        if (accbal === void 0) { accbal = 0; }
        if (custname === void 0) { custname = 'AAA'; }
        if (custid === void 0) { custid = 0; }
        if (accnum === void 0) { accnum = 0; }
        console.log("called..");
        this.accountNumber = accnum;
        this.accountType = acctype;
        this.accountBalance = accbal;
        this.customerId = custid;
        this.customerName = custname;
    }
    BankAccount.prototype.checkBalance = function () {
        return this.accountBalance;
    };
    BankAccount.prototype.deposit = function (deptamount) {
        this.accountBalance = this.accountBalance + deptamount;
        return this.accountBalance;
    };
    BankAccount.prototype.withdraw = function (withamount) {
        // 0 balance allowed
        if (this.accountBalance < withamount)
            console.log("can not withdraw");
        else
            this.accountBalance = this.accountBalance - withamount;
        return this.accountBalance;
    };
    return BankAccount;
}());
// constructor overload : call overload
var account1 = new BankAccount();
var account2 = new BankAccount("salary");
var account3 = new BankAccount("savings", 20000);
var account4 = new BankAccount("current", 20000, 'bina p');
var account5 = new BankAccount("savings", 30000, 'veena p', 1111);
var account6 = new BankAccount("savings", 20000, 'kareena p', 2121, 3333333);
console.log(account1);
console.log(account2);
console.log(account3);
