class A {
  greet() {
    console.log("Hello from A");
  }
}
 
class B {
  greet() {
    console.log("Hello from B");
  }
}
 
type Constructor<T = {}> = new (...args: any[]) => T;
 
function MixA<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    greet() {
      console.log("Hello from A (Mixin)");
    }
  };
}
 
function MixB<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    greet() {
      console.log("Hello from B (Mixin)");
    }
  };
}
 
// Combine mixins
class Base {}
 
// MixB is applied first, then MixA
class D extends MixA(MixB(Base)) {}
 
const obj = new D();
obj.greet();   //Output: Hello from A (Mixin)