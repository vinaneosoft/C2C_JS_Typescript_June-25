import { Employee } from "./account1";

// account2
export let bankName="SC";

export function changeBank(bank:string){
    bankName=bank;
}

// Trainer extends Employee
export class Trainer extends Employee{
    constructor(empId=0, 
        empName="", 
        empSalary=0,
        public variablePay=0, 
        public trainerType='softskills trainer' ){
        super(empId, empName, empSalary);
    }
    getTotalSalary(){
        return this.employeeSalary+this.variablePay;
    }
    test(){
        this.dname
    }
    public getDetails():string {
        return `${super.getDetails()} Variable Pay: ${this.variablePay} type: ${this.trainerType}`
    }
}// end

let companyName="Seed";
export default companyName;


let xyz='hello'
console.log(xyz);
