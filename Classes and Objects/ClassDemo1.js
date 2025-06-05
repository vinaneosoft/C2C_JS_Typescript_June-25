var BankAccount = /** @class */ (function () {
    // default constructor
    function BankAccount() {
        console.log("called..");
        this.accountNumber = 0;
        this.accountType = 'savings';
        this.accountBalance = 0;
        this.customerId = 0;
        this.customerName = 'ABC';
    }
    // functions
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
var account1 = new BankAccount(); // 0-p // constructor gets implicitly called when we create new object
console.log(account1);
console.log(account1.accountNumber);
account1.accountNumber = 1; // state change in one object never affects other objects
account1.accountBalance = 1000;
// change value for every property
// again display ur account
//console.log(account1.accountNumber);
var account2 = new BankAccount();
console.log(account2);
console.log(account2.accountNumber);
account2.accountNumber = 2;
account2.accountBalance = 5000;
// change value for every property
// again display ur account
//console.log(account2.accountNumber);
account1.deposit(10000);
console.log(account1);
account2.deposit(10000);
console.log(account2);
// also withdraw some amount from both the accounts
var account3 = account1; // c called?
console.log(account3 == account1);
console.log(account1 == account2);
