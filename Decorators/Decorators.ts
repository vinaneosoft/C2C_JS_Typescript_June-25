

class Parent{
    demo(){

    }
}
@decorator1()
class Child extends Parent{
    @decorator1
    xyz;
    @override
    demo(){

    }
}

