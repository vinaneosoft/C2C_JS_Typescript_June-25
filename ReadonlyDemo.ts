
class Circle{
    readonly radius:number;
    static readonly pie=3.142;

    constructor(radius:number){
        this.radius=radius;
    }
    getArea(){
        return Circle.pie+this.radius+this.radius
    }
}
let circle1=new Circle(5);
console.log(circle1.getArea());
//Circle.pie=3; pie is readonly
let circle2=new Circle(3);
console.log(circle2.getArea());

console.log(circle1.radius);
console.log(circle2.radius);
//circle1.radius=6;