
class Employee {
    constructor( public employeeId=0,
    public employeeName="AAA",
    public employeeSalary=0){
        console.log("super class");
    }
    getDetails(){
        console.log("super method");
        return `Employee id : ${this.employeeId} Name: ${this.employeeName} Monthly Salary : ${this.employeeSalary}`
    }
}
class Trainer extends Employee{
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
    getDetails(){
        console.log("sub method");
        
        return `Employee id : ${this.employeeId} Name: ${this.employeeName} Monthly Salary : ${this.employeeSalary}
        Variable Pay: ${this.variablePay} type: ${this.trainerType}`
    }
}// end

let trainer1=new Trainer(1, "krupa", 45000,34000);  // employee object
let trainer2=new Trainer(2, 'vina', 45000, 23000,'technical trainer');

console.log(trainer1.getDetails()); // inherited overriding method // dynamic polymorphism





