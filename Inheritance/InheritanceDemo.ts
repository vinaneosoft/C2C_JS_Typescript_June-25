
class Employee {
    employeeId=0;
    employeeName="AAA";
    employeeSalary=0;
    protected deptCode='XYZ';
    constructor(){
        console.log("super class");
    }
     getDetails(){
        return `Employee id : ${this.employeeId} Name: ${this.employeeName} Monthly Salary : ${this.employeeSalary}`
    }
}
class Trainer extends Employee{
    variablePay=0;
    trainerType='softsskills'
    constructor(){
        let name="hari";
        console.log("subclass class");
        super();   // constructor call, super must be used before this keyword
        this.variablePay=0;
    }
    getTotalSalary(){
        return this.employeeSalary+this.variablePay;
    }
    test(){
        // protected properties from superclass are accessible within subclass body
        console.log(this.deptCode);
    }
}// end

let employee1=new Employee(); // superclass constructor


// subclass can access all visible properties from its superclass
let trainer1=new Trainer();  // when u create subclass object, superclass object gets created automatically
trainer1.employeeId=111 // state change
trainer1.employeeName="Pooja"
trainer1.employeeSalary=45000;
trainer1.trainerType="technical";
trainer1.variablePay=30000;


