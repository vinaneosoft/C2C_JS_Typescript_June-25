class Employee{
    employeeId=0;
    employeeName="AAA";
    employeeSalary=0

    getDetails(){
        return `Employee id : ${this.employeeId} Name: ${this.employeeName} Monthly Salary : ${this.employeeSalary}`
    }
}
class Trainer extends Employee{
    variablePay=0;
    trainerType='softsskills'

    getTotalSalary(){
        return this.employeeSalary+this.variablePay;
    }
}
// subclass can access all visible properties from its superclass
let trainer1=new Trainer();  // when u create subclass object, superclass object gets automatically
trainer1.employeeId=111 // state change