
interface Father{
     dream():string;
}
interface Mother{
    dream():string;
}


class Child implements Mother, Father{
    dream() {
       // impl
       return "Lawyer"
    }
}