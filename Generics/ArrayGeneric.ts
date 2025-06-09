//let strings: Array<string> = [];
 let strings=new Array<string>('vivek', 'anup', 'pooja');
strings.push("Shubh");
strings.push("Harsh");
strings.push("Lala");
 strings.push('Lala', 'Shubh');
 strings.pop();
console.log("String Array:", strings);
//let numbers: number[] = [];
let numbers=new Array<number>(45,3,4,1,2);
numbers.push(1);
numbers.push(2);
numbers.push(3);
numbers.pop();
console.log("Number array", numbers);
numbers[3]=34;

