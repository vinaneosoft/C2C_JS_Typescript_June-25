var Company = /** @class */ (function () {
    function Company() {
        this.companyName = "Axis";
    }
    Company.getInstance = function () {
        if (Company.company == null) {
            Company.company = new Company();
            console.log("object created");
        }
        return Company.company;
    };
    return Company;
}());
var company1 = Company.getInstance();
var company2 = Company.getInstance();
var company3 = Company.getInstance();
var company4 = Company.getInstance();
var company5 = Company.getInstance();
var company6 = Company.getInstance();
console.log(company1 == company2);
console.log(company3 == company2);
console.log(company1);
console.log(company2);
company1.companyName = "SC";
console.log(company2);
