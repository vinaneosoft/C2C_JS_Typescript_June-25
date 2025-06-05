
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
    public getDetails():string {
       // this.getTotalSalary();
       // this.test(); // inherited method
       // super.getDetails();

        return `${super.getDetails()} Variable Pay: ${this.variablePay} type: ${this.trainerType}`
      
    }
}// end

class Developer extends Employee{
    developmentTechnology='JAVA';
    currentProject='SVC';

    public getDetails():string {
        return `${super.getDetails()} Technlogy for Dev: ${this.developmentTechnology} Current Project : ${this.currentProject}`
    }

}

/*
rules :
method name and parameter list must be same
scope : same, increase  can not decrease
return type primitive : then same
return type void : then u can change in subclass method
return type is object : then u can return covarient*/

let employee:Employee;
employee=new Trainer();

console.log( employee.getDetails());


employee=new Developer();
console.log( employee.getDetails());



// Employee, Trainer, Developer
let e1=new Employee(1);
let tr=new Trainer(2);
let dev=new Developer(3);

function meeting(emp:Employee){
    console.log(emp.employeeId);
   console.log( emp.getDetails()); // polymorphism
   
}

meeting(e1);
meeting(tr);
meeting(dev);