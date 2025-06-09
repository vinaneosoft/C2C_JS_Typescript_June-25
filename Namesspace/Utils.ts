

 export namespace utils{
    export function add(...nums:number[]){
        return nums.reduce((acc, num)=>acc+num, 0)
    }
    export function subtract(...nums:number[]){
        return nums.reduce((acc, num)=>acc-num, 0)
    }
}

console.log(utils.add(45,3,23,5,6,7));
console.log(utils.subtract(45,3,23,5,6,7));