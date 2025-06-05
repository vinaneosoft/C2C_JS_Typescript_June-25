class Customer{
    constructor(private custMobile=0, 
        private custAddress="BBB", 
        private custName="AAA", 
        private custId=0){  
    }
    // instance method

    // public mediator
}
class BankAccount{
    constructor(private accountType='savings', 
        private accountBalance=0, 
        private customer=new Customer(), 
        private accountNUmber=0)
        {}
    // instance methods

     checkBalance(){
        return this.accountBalance;
    }
    deposit(deptamount:number):number{
        this.accountBalance=this.accountBalance+deptamount;
        return this.accountBalance;
    }
    withdraw(withamount:number):number{
        // 0 balance allowed
        if(this.accountBalance<withamount)
            console.log("can not withdraw");
        else
            this.accountBalance=this.accountBalance-withamount;
        return this.accountBalance
    }
} // end

let account1=new BankAccount();
console.log(account1);

let customer2=new Customer(9090909090, 'ZP road, Airoli', 'Pravin Patil', 1212);
let account2=new BankAccount('salary', 40000, customer2, 232323);
console.log(account2);
console.log(account2.accountBalance); //getter


// create one more customer and its account
let customer3=new Customer(808070808080, 'MG road, Pune', 'Karuna Patil', 3232);
let account3=new BankAccount('current', 30000, customer3, 454545);
console.log(account3);
account3.accountType='salary'; // setter
//Q. what is address of customer of account2
const address=account2.customer.custAddress; // getter

//Q. Change contact number of customer of account3
account3.customer.custMobile=78787878787;  // setter

