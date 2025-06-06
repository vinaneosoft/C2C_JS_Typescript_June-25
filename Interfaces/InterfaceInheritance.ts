
interface Stack{
    push(ele):void;
    pop?():number
    removeFirst():number;
}
interface Queue{
    add(ele):void;
    remove():number;
    removeFirst():number;
}
// below multiple inheritance not is allowed if super interfaces have same method names but they are not identical
interface MyArray extends Stack, Queue{
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
    add(ele: any): void {
        //impl
    }
    remove(): number {
        return 0;
        //impl
    }
    removeFirst(): number {
        //impl
        return 0;
    }
}

/*
class A
interface B
class C
interface D
interface E
class F

A implements B  : r
B implements A : w
A extends D : w
A extends C : r
B extends D : r
A extends C,F : w
B extends D,E : r
F extends C implements D : r
C implements B extends A : w
A extends D implements F : w
*/