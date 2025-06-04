

// number, string, boolean, any, undefined, null

let empsalary:number;
empsalary=4500000;

console.log(typeof empsalary);

let empname:string;
empname="Mohan";

let lightON:boolean;
lightON=true;

let empcode:any;  // any type allowed
empcode=12344;
empcode="e1234"
empcode=true;

let ecode : number | string;  // either number or string allowed
ecode=12344;
ecode="e1234"
//ecode=true;


let company; // any
console.log(typeof company); // undefined

company="Neosoft";
console.log(typeof company); // string


console.log((company as string).length);
console.log((<string>company).length);
let com=company as string;
console.log(com.length);

company=677888;
console.log(typeof company); // number


let baselocation="Dadar"; // string
//baselocation=4567;
console.log(baselocation.length);


