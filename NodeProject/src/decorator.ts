function LogMethod(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyName} with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result from ${propertyName}:`, result);
    return result;
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }

  @LogMethod
  multiply(a: number, b: number): number {
    return a * b;
  }
}

// Testing the decorated methods
const calc = new Calculator();
console.log( calc.add(3, 5));
console.log( calc.multiply(4, 6));
