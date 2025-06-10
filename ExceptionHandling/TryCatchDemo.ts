
/* try with muitple catch not allowed */
function getLength(value: any) {
    try{
    console.log("code before length display......");
    console.log(value.length);
    console.log("code after length display......");
    }
    catch(error:any){
        console.log(error);
    }
    finally{
        console.log("this code will execute though execption occurs or not.....");
    }
    console.log('...below...catch....'); 
}
function add(...nums){
    return nums.reduce((acc,num)=>acc+num, 0);
}

getLength("hello"); 
getLength(undefined); 
console.log(add(45,3,2,4,56));
