/* You want to create a new type by picking 
a subset of properties from an existing interface. */
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Pick only 'id' and 'name' from User
type UserPreview = Pick<User, "id" | "name">;

let user1:UserPreview={
  id:101,
  name:'poonam'
}

const showUser = (user: UserPreview) => {
  console.log(`ID: ${user.id}, Name: ${user.name}`);
};
// Usage
showUser({ id: 1, name: "Alice" });

// Equivalent to:
type UserPreview2 = {
  id: number;
  name: string;
};