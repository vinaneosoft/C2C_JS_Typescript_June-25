class BankAccount{
    accountNumber:number;
    customerId:number;
    customerName:string;
    accountBalance:number;
    accountType:string
    // functions
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

