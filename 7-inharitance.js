//22-8// Inheritance, extends class, super, class method
//What is inheritance?
//What is Encapsulation?
//What is polymorphism?
class Parent {
    constructor() {
        this.FatherName = "Schwreznegger";
    }
}

// Parent class's characteristics inherit by following   
class Child extends Parent {
    constructor(name) {
        super(); //Must call super constructor in derived class before before access parent class 
        this.fulName = name;
    }
    //Used to define new function
    //we can read from child and parent too
    getFullName(){
        return this.fulName + " " + this. FatherName;

    }
}

const baby1 = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby1);
console.log(baby2);
console.log(baby2.FatherName);
//Methods also can access the characteristics from parent class 
console.log(baby1.getFullName());
console.log(baby2.getFullName());
