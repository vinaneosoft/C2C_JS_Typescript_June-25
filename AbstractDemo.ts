
abstract class Shape{
    shapeType:string;
    getShapeType():string{
       return this.shapeType;
    }
    abstract getArea():number; // method signature will get implemented in future
}

class Circle extends Shape{
    radius:number=6;
    static readonly pie=3.142;
    getArea() {
        return Circle.pie*this.radius*this.radius
    }
}
abstract class TwoDShape extends Shape{

}
class Rectangle extends TwoDShape{
    length:number=3;
    breadth:number=4;
    getArea() {
        return this.length*this.breadth;
    }
}

//Cannot create an instance of an abstract class.
//let shape=new Shape(); // not fully implemented

let shape:Shape;

shape=new Circle();  // upcasting // you can created abstract class reference
console.log(shape.getArea()); // Circle
shape.shapeType='2D'
shape.getShapeType();

shape=new Rectangle();
console.log(shape.getArea()); // Rectangle









abstract class A{
 abc(){

 }
}

interface B{
    // variable signatures and method signature
}

class C implements B{

}