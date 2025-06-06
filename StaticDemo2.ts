import { BankAccount } from "./StaticDemo";
class Bank{
    static showBankAccount(acc:BankAccount){
        // static method:  static memebers via classname, this
        // static method : non static members via this : no, via obj : yes
        console.log("in static method of Bank", acc.accountType);
    }
}

let account7=new BankAccount();
Bank.showBankAccount(account7);
let account8=new BankAccount("current");
Bank.showBankAccount(account8);