class Customer{
    constructor(public custMobile=0, 
        public custAddress="BBB", 
        public custName="AAA", 
        public custId=0){
        
    }
    // instance method
}
class BankAccount{
    constructor(public accountType='savings', 
        public accountBalance=0, 
        public customer=new Customer(), 
        public accountNUmber=0)
        {}
    // instance methods
} 

let account1=new BankAccount();
console.log(account1);

let customer2=new Customer(9090909090, 'ZP road, Airoli', 'Pravin Patil', 1212);
let account2=new BankAccount('salary', 40000, customer2, 232323);
console.log(account2);

// create one more customer and its account
let customer3=new Customer(808070808080, 'MG road, Pune', 'Karuna Patil', 3232);
let account3=new BankAccount('current', 30000, customer3, 454545);
console.log(account3);

//Q. what is address of customer of account2
const address=account2.customer.custAddress;

//Q. Change contact number of customer of account3
account3.customer.custMobile=78787878787;