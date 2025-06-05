class BankAccount{
// when u declare instance variables directly as a parameter of constructor then give atleast one visibility
//then constructor can differentiate between local and instance variables 
    constructor(public accountType='savings', 
        public accountBalance=0, 
        public customerName='AAA', 
        public customerId=0, 
        public accountNumber=0){
    }
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
}

// constructor overload : call overload
const account1=new BankAccount(); 
const account2=new BankAccount("salary");
const account3=new BankAccount("savings", 20000);
const account4=new BankAccount("current", 20000,'bina p');
const account5=new BankAccount("savings", 30000,'veena p', 1111);
const account6=new BankAccount("savings", 20000,'kareena p', 2121, 3333333);

console.log(account1);
console.log(account2);
console.log(account3);



