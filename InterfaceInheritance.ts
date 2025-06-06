

interface Stack{
    push(ele):void;
    pop():number
}

interface MyArray extends Stack{
    insert(ele, index):void;
}

class ArrayClass implements MyArray{
    insert(ele, index): void {
        // impl
    }
    push(ele: any): void {
        //impl
    }
    pop(): number {
        return 0
        // impl
    }
}