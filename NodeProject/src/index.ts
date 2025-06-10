/// <reference path="shapes.ts" />
/// <reference path="shapes-augment.ts" />



const c: Shapes.Circle = { radius: 5 };
console.log("Circle Area:", Shapes.carea(c));

const r: Shapes.Rectangle = { width: 4, height: 6 };
console.log("Rectangle Area:", Shapes.rarea(r)); // Overloaded version



