

class Father{
    dream(){
        return "My child should become Doctor"
    }
}
class Mother{
    dream(){
        return "My child should become Engineer"
    }
}




class Child extends Father, Mother{

    setDream(){
        const d=this.dream(); // ambiguity
    }
}