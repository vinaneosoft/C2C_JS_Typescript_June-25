var Shapes;
(function (Shapes) {
    function carea(c) {
        return Math.PI * c.radius * c.radius;
    }
    Shapes.carea = carea;
})(Shapes || (Shapes = {}));
/// <reference path="shapes.ts" />
var Shapes;
(function (Shapes) {
    function rarea(r) {
        return r.width * r.height;
    }
    Shapes.rarea = rarea;
})(Shapes || (Shapes = {}));
/// <reference path="shapes.ts" />
/// <reference path="shapes-augment.ts" />
var c = { radius: 5 };
console.log("Circle Area:", Shapes.carea(c));
var r = { width: 4, height: 6 };
console.log("Rectangle Area:", Shapes.rarea(r)); // Overloaded version
