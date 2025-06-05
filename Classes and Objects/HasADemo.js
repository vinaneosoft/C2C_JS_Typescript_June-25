var Customer = /** @class */ (function () {
    function Customer(custMobile, custAddress, custName, custId) {
        if (custMobile === void 0) { custMobile = 0; }
        if (custAddress === void 0) { custAddress = "BBB"; }
        if (custName === void 0) { custName = "AAA"; }
        if (custId === void 0) { custId = 0; }
        this.custMobile = custMobile;
        this.custAddress = custAddress;
        this.custName = custName;
        this.custId = custId;
    }
    return Customer;
}());
var BankAccount = /** @class */ (function () {
    function BankAccount(accountType, accountBalance, customer, accountNUmber) {
        if (accountType === void 0) { accountType = 'savings'; }
        if (accountBalance === void 0) { accountBalance = 0; }
        if (customer === void 0) { customer = new Customer(); }
        if (accountNUmber === void 0) { accountNUmber = 0; }
        this.accountType = accountType;
        this.accountBalance = accountBalance;
        this.customer = customer;
        this.accountNUmber = accountNUmber;
    }
    return BankAccount;
}());
var account1 = new BankAccount();
console.log(account1);
var customer2 = new Customer(9090909090, 'ZP road, Airoli', 'Pravin Patil', 1212);
var account2 = new BankAccount('salary', 40000, customer2, 232323);
console.log(account2);
