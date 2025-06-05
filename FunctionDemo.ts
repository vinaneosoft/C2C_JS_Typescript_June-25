

function addition(num1:number, num2:number):number {
    return num1 + num2;
}
const result=addition(45,67);
//addition(45);
//addition(45,67,67888);
//addition("45","67");
function addition2(num1:number, num2?:number):number {
    if(num2==undefined)
        return num1;
    else
        return num1 + num2;
}
addition2(45);
addition2(45,78)


function addition3(num1:number, num2=0):number {
    console.log(num1);
    console.log(num2);
    return num1 + num2;
}
console.log(addition3(45));
console.log(addition3(45,78));

/* function overloading : signature overloading */

function add(num1:number):number;
function add(num1:number, num2:number):number;

function add(n1:number, n2?:number):number{
    if(n2==undefined)
        return n1
    else
        return n1+n2;
}
add(6);
add(6,8)

function details(empid:number):void;
function details(empname:string):void;
function details(empid:number, empname:string):void;


function details(value1:number | string, value2?:string) : void{
    console.log(value1);
}

details(101);
details("Mahendra")
details(101, "Mahendra")

// create addfun with spread operator