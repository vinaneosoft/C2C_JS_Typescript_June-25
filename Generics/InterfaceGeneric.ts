interface EmpIntf<T>{
    empId:T
}

class NeoTrainer implements EmpIntf<number>{
    empId:number
}

class NeoDeveloper implements EmpIntf<string>{
    empId:string
}

let trainer1=new NeoTrainer();
trainer1.empId=123;