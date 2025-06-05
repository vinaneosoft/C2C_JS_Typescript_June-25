
class Employee {
    constructor( public employeeId=0,
    public employeeName="AAA",
    public employeeSalary=0){
        console.log("super class");
    }
    getDetails(){
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
}// end

let trainer1=new Trainer(1, "krupa", 45000,34000);  // employee object
let trainer2=new Trainer(2, 'vina', 45000, 23000,'technical trainer');

let trainer3=new Trainer();

console.log(trainer1);
console.log(trainer2);





