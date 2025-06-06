var Circle = /** @class */ (function () {
    function Circle(radius) {
        if (radius === void 0) { radius = 0; }
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Circle.pie + this.radius + this.radius;
    };
    Circle.pie = 3.142;
    return Circle;
}());
var circle1 = new Circle(5);
console.log(circle1.getArea());
//Circle.pie=3; pie is readonly
var circle2 = new Circle(3);
console.log(circle2.getArea());
console.log(circle1.radius);
console.log(circle2.radius);
