class ArithmeticError extends Error {
    constructor(message) {
        super(message); // Call base class constructor
        // Fix prototype chain (important for instanceof and toString)
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
function divide(num1, num2) {
    if (num2 == 0)
        throw new ArithmeticError("Divider is zero");
    return num1 / num2;
}
try {
    console.log(divide(45, 0));
}
catch (error) {
    console.log(error);
}
console.log("code after catch....");
