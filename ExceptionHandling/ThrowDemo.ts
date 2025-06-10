
/* try with muitple catch not allowed */
function getLength(value: any) {
    try{
    console.log("code before length display......");
    if(value==undefined)
        /* throw new Error("value is undefined....");  or*/
        throw new TypeError("value is undefined...."); // catch
    console.log(value.length);
    console.log("code after length display......");
    }
    finally{
       console.log("calleed finally block...");
       
    }
    console.log('...below..finally....'); 
}
function add(...nums:any){
    return nums.reduce((acc,num)=>acc+num, 0);
}

getLength("hello"); 
console.log("--------");
try{
getLength(undefined); 
}catch(error){
    console.log("caller side");
    console.log(error);
}
finally{
        console.log("caller finally block....");
}
console.log("--------");
console.log(add(45,3,2,4,56));
