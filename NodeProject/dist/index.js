"use strict";
/// <reference path="shapes.ts" />
/// <reference path="shapes-augment.ts" />
const c = { radius: 5 };
console.log("Circle Area:", Shapes.carea(c));
const r = { width: 4, height: 6 };
console.log("Rectangle Area:", Shapes.rarea(r)); // Overloaded version
