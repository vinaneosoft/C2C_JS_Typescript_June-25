// unique key, nonindexed, ordered
let mymap = new Map();
mymap.set(123, 89000);
mymap.set(123, 89000);
mymap.set(123, 89000);
mymap.set(123, 89000);
mymap.set(123, 89000);
mymap.set(123, 89000);
mymap.set(123, 89000);
mymap.set(321, 88000);
mymap.set(123, 90000);
mymap.set(355, 88000);
console.log(mymap);
console.log(mymap.get(321));
// keys, entries, values, delete, has
console.log(mymap.has(355));
mymap.delete(5678);
