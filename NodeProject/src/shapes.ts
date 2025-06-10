namespace Shapes {
  export interface Circle {
    radius: number;
  }

  export function carea(c: Circle): number {
    return Math.PI * c.radius * c.radius;
  }
}