var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.getShapeType = function () {
        return this.shapeType;
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.radius = 6;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Circle.pie * this.radius * this.radius;
    };
    Circle.pie = 3.142;
    return Circle;
}(Shape));
var TwoDShape = /** @class */ (function (_super) {
    __extends(TwoDShape, _super);
    function TwoDShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TwoDShape;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.length = 3;
        _this.breadth = 4;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.length * this.breadth;
    };
    return Rectangle;
}(TwoDShape));
//Cannot create an instance of an abstract class.
//let shape=new Shape(); // not fully implemented
var shape;
shape = new Circle(); // upcasting // you can created abstract class reference
console.log(shape.getArea()); // Circle
shape = new Rectangle();
console.log(shape.getArea()); // Rectangle
