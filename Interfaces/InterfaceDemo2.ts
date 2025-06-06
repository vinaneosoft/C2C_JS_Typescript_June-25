interface EmployeeIntf{
    empId:number;
    empName:string;
    readonly trainerType?:string;
    getSalary():void;
    getVariablePay?():void;
    
}

class NeoDeveloper implements EmployeeIntf{
    trainerType?: string | undefined;
    empId:number;
    empName:string;
    getSalary(): void {
        //impl
    }
 
}
class NeoTrainer implements EmployeeIntf{
    empId:number;
    empName:string;
    trainerType:string="softskills trainer";
    getSalary(): void {
        //impl
    }
    getVariablePay(): void {
        //impl
    }
}

let emp:EmployeeIntf;
emp=new NeoDeveloper();

emp=new NeoTrainer();
//emp.trainerType="technical trainer"; //Cannot assign to 'trainerType' because it is a read-only property.
console.log(emp.trainerType);
