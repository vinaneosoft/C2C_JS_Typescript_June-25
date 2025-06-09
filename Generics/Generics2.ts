class MyObject<T>{
    value:T;
    constructor(value:T){
        this.value=value;
    }
    getValue():T{
        return this.value;
    }
}

let ob1=new MyObject<number>(45);
let v1=ob1.getValue();
let ob2=new MyObject<string>("hello");
let v2=ob2.getValue();
let ob3=new MyObject<boolean>(true);
let v3=ob3.getValue();




