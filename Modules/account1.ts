// module name : account1
export let bankName="Axis";


// Employee
export class Employee {
    protected dname="JS";
    constructor(public employeeId=0,
    public employeeName="AAA",
    public employeeSalary=0){
        console.log("super class");
    }
    public getDetails():string{ 
        console.log("super method");
        return `Employee id : ${this.employeeId} Name: ${this.employeeName} Monthly Salary : ${this.employeeSalary}`
    }
}


let companyName="Neosoft";
export default companyName;

export let clocation ="Dadar";
// export default clocation; /* A module cannot have multiple default exports. */
