"use strict";
var Shapes;
(function (Shapes) {
    function carea(c) {
        return Math.PI * c.radius * c.radius;
    }
    Shapes.carea = carea;
})(Shapes || (Shapes = {}));
