var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var user = {
    name: "hari",
    age: 23,
    email: "hari@gmail.com"
};
var user1 = {
    age: 23,
    email: "hari@gmail.com"
};
// Partial User: all properties become optional
var updateUser = function (updates) {
    return __assign(__assign({}, user), updates);
};
// Usage
console.log("object before updation:", user);
var updated1 = updateUser({ name: "Alice" });
console.log("object after updation:", updated1);
var updated2 = updateUser({ age: 30 });
console.log("object after updation:", updated2);
var updated3 = updateUser({}); // even an empty object is fine
console.log("object after updation:", updated3);
