var BankAccount = /** @class */ (function () {
    function BankAccount(accountType, accountBalance, customerName, customerId, accountNumber) {
        if (accountType === void 0) { accountType = 'savings'; }
        if (accountBalance === void 0) { accountBalance = 0; }
        if (customerName === void 0) { customerName = 'AAA'; }
        if (customerId === void 0) { customerId = 0; }
        if (accountNumber === void 0) { accountNumber = 0; }
        this.accountType = accountType;
        this.accountBalance = accountBalance;
        this.customerName = customerName;
        this.customerId = customerId;
        this.accountNumber = accountNumber;
        console.log("in constructor");
        BankAccount.incrementCount();
        // used to initialize instance variables
    }
    BankAccount.incrementCount = function () {
        BankAccount.totalaccounts++;
    };
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
(function () {
    console.log("in block1");
    BankAccount.totalaccounts = 0; // used to intialize static variables
})();
(function () {
    console.log("in block2");
})();
console.log("count:" + BankAccount.totalaccounts);
var account1 = new BankAccount(); // implicitly goes to constructor
var account2 = new BankAccount("salary");
var account3 = new BankAccount("savings", 20000);
var account4 = new BankAccount("current", 20000, 'bina p');
var account5 = new BankAccount("savings", 30000, 'veena p', 1111);
var account6 = new BankAccount("savings", 20000, 'kareena p', 2121, 3333333);
console.log("count:" + BankAccount.totalaccounts);
console.log(account1);
console.log(account2);
console.log(account3);
console.log(account4);
console.log(account5);
console.log(account6);
