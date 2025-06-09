import { bankName as bName, Employee} from "./Modules/account1";
import { bankName, changeBank, Trainer} from "./Modules/account2";
import cname from "./Modules/account1"; // no curly braces , direct alias
import companyName from "./Modules/account2";

import * as mod1 from './Modules/module3'; // * as prefix

console.log(mod1.a);
console.log(mod1.b);
console.log(mod1.c);
let test=new mod1.Test();

console.log(bName);
console.log(bankName);
console.log(cname);

// change bankName to Standard Chartered Bank
//bankName="Standard Chartered";

changeBank("Standard Chartered");
console.log(bankName);

let emp=new Employee();
emp.employeeId=123;
emp.employeeName="hari"


//create 2 Trainer objects 
let trainer1=new Trainer(1, "krupa", 45000,34000);
let trainer2=new Trainer(2, 'vina', 45000, 23000,'technical trainer');



