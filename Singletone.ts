class Company{
    private static company; 
    companyName="Axis";
    private constructor(){

    }
    static getInstance():Company{
        if(Company.company==null){
            Company.company=new Company();
            console.log("object created");
        }
        return Company.company;
    }
}
let company1=Company.getInstance();
let company2=Company.getInstance();
let company3=Company.getInstance();
let company4=Company.getInstance();
let company5=Company.getInstance();
let company6=Company.getInstance();

console.log(company1==company2);
console.log(company3==company2);

console.log(company1);
console.log(company2);
company1.companyName="SC";
console.log(company2);

/*
1. always create private constructor so that any object from outside of a class not created
using new keyword

2. declare such variable in class to point to object, which will load once for that class (static)

3. make the logic of creating only one object of class in static method always*/