class Department{
    getEmployee():Employee{
        return new Employee();
    }
}

class LDDepartment extends Department{
    getEmployee():Trainer{
        return new Trainer();
    }
}
// if super class method is returning the object then
// subclass overriding method can return subtype of above returned object
// this concepts is known as "Covariants" allowed
//Employee ---> Trainer