


class MyObject{
    value:any;
    constructor(value:any){
        this.value=value;
    }
    getValue():any{
        return this.value;
    }
}


let ob1=new MyObject(34);
let v1=ob1.getValue() as number;
let ob2=new MyObject("hello");
let v2=ob2.getValue() as string;
let ob3=new MyObject(true);
let v3=ob3.getValue() as boolean;
