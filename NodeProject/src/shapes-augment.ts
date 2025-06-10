/// <reference path="shapes.ts" />

namespace Shapes {
  export interface Rectangle {
    width: number;
    height: number;
  }

  export function rarea(r: Rectangle): number {
    return r.width * r.height;
  }
}