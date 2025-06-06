

class Father{
    dream():string{
        return "Doctor"
    }
}
interface Mother{
    dream():string;
}
interface XYZ extends Father, Mother{

}

class Child extends Father implements Mother{
    dream() {
        return super.dream();
       
    }
}