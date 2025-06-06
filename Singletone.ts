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



