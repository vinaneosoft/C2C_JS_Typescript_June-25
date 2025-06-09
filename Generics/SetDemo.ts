// unique, ordered, nonindexed
let idSet=new Set<number>();
idSet.add(123);
idSet.add(234);
idSet.add(123);
idSet.add(167);
idSet.add(167);
idSet.add(500);
idSet.add(500);
console.log(idSet.size);
console.log(idSet.entries());
console.log(idSet.keys());




let mySet=new Set();
mySet.add(45);
mySet.add('hi');
mySet.add(null)