interface EmployeeIntf{
    empId:number;
    empName:string;
    trainerType?:string;

    getSalary():void;
    getVariablePay?():void;
}

class NeoDeveloper implements EmployeeIntf{
    empId:number;
    empName:string;
    getSalary(): void {
        //impl
    }
}

class NeoTrainer implements EmployeeIntf{
    empId:number;
    empName:string;
    trainerType:string;
    getSalary(): void {
        //impl
    }
    getVariablePay(): void {
        //impl
    }
}



let emp:EmployeeIntf;
emp=new NeoDeveloper();