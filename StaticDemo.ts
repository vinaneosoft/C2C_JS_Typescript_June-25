export class BankAccount{
    static totalaccounts:number;
    static{
        console.log("in block1");
        BankAccount.totalaccounts=0; // used to intialize static variables
    }
    static{
        console.log("in block2");
    }
    constructor(public accountType='savings', 
        public accountBalance=0, 
        public customerName='AAA', 
        public customerId=0, 
        public accountNumber=0){
            console.log("in constructor");
            BankAccount.incrementCount();
            // used to initialize instance variables
    }
    static incrementCount(){
        this.totalaccounts++; //this: typeof BankAccount
        // can we acess instance members in static area using this? NO
        //console.log(this.accountType);
       // this.checkBalance();
    }
    checkBalance(){
        // can we access static members in object area? Yes but via classname
       // console.log(BankAccount.totalaccounts);
        
        return this.accountBalance; //this: this
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
    showAccount(){
        console.log(this.accountType);
        
    }
}

console.log("count:"+BankAccount.totalaccounts);
const account1=new BankAccount();  // implicitly goes to constructor
account1.showAccount()
const account2=new BankAccount("salary");
const account3=new BankAccount("savings", 20000);
const account4=new BankAccount("current", 20000,'bina p');
const account5=new BankAccount("savings", 30000,'veena p', 1111);
const account6=new BankAccount("savings", 20000,'kareena p', 2121, 3333333);
console.log("count:"+BankAccount.totalaccounts);
console.log(account1);
console.log(account2);
console.log(account3);
console.log(account4);
console.log(account5);
console.log(account6);


