
class Employee {
    constructor( public employeeId=0,
    public employeeName="AAA",
    public employeeSalary=0){
        console.log("super class");
    }

    test(){

    }
    public getDetails():string{
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
    public getDetails():string{
       // this.getTotalSalary();
       // this.test(); // inherited method
       // super.getDetails();
        console.log("sub method");
        return `${super.getDetails()} Variable Pay: ${this.variablePay} type: ${this.trainerType}`
       
    }

   
}// end

let employee1=new Employee(2,"hari",45000);
console.log( employee1.getDetails());


let trainer1=new Trainer(1, "krupa", 45000,34000);  // employee object
let trainer2=new Trainer(2, 'vina', 45000, 23000,'technical trainer');

console.log(trainer1.getDetails()); // inherited overriding method // dynamic polymorphism



/*
rules :
method name and parameter list must be same
scope : same, increase  can not decrease
return type primitive : then same
return type void : then u can change in subclass method
return type is object : then u can return covarient*/

