class Parent{
    static dream(){
            return "Doctor"
    }
    abc(){

    }
}

class Child extends Parent{
    static dream(){
            return "Doctor"
    }
    abc(){

    }
}

let child =new Child();
child.abc(); // dynamic polymorphism

Parent.dream();
Child.dream();