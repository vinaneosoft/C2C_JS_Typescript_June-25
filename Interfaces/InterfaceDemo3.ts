interface AddSub{
    (a:number, b:number):number;
}

const add:AddSub=(n1:number, n2:number)=>{
    return n1+n2
}
const sub:AddSub=(n1:number, n2:number)=>{
    return n1-n2
}

interface Emp {
    empid:number
}

const empObj:Emp={
     empid:123
}

interface Emp2 {
     [key: string]: string;
}

const empObj2:Emp2={
    id:"123",
    name:"hari"
}
console.log(empObj2['id']); // index signature
console.log(empObj2.id);