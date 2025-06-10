
/*Suppose you have a full object type, but you want to create a version where 
all properties are optional (e.g., for updates or partial form data). */
interface User {
  name: string;
  age: number;
  email: string;
}

let user:User={
  name: "hari",
  age: 23,
  email: "hari@gmail.com"
}

let user1:Partial<User>={
   age: 23,
   email: "hari@gmail.com"
}

// Partial User: all properties become optional
const updateUser = (updates: Partial<User>) => {
    return {...user, ...updates}
};
// Usage
console.log("object before updation:", user);
const updated1=updateUser({ name: "Alice" });
console.log("object after updation:", updated1);
const updated2= updateUser({ age: 30 });
console.log("object after updation:", updated2);
const updated3=updateUser({}); // even an empty object is fine
console.log("object after updation:", updated3);

// Equivalent to:
interface PartialUser {
  name?: string;
  age?: number;
  email?: string;
}