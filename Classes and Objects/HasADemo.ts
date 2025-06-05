class Customer{
    constructor(public custMobile=0, 
        public custAddress="BBB", 
        public custName="AAA", 
        public custId=0){
        
    }
}

class BankAccount{
    constructor(public accountType='savings', 
        public accountBalance=0, 
        public customer=new Customer(), 
        public accountNUmber=0)
        {}
} 

let account1=new BankAccount();
console.log(account1);

let customer2=new Customer(9090909090, 'ZP road, Airoli', 'Pravin Patil', 1212);
let account2=new BankAccount('salary', 40000, customer2, 232323);
console.log(account2);

// create one more customer and its account