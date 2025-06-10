"use strict";
/// <reference path="shapes.ts" />
var Shapes;
(function (Shapes) {
    function rarea(r) {
        return r.width * r.height;
    }
    Shapes.rarea = rarea;
})(Shapes || (Shapes = {}));
