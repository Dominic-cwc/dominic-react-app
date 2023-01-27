class Person {
    constructor(name) {
        this.name = name;
    }


    walk() {
        console.log("walk")
    }
}


class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log("teach");
    }
}

const teacher = new Teacher("Dominic", "Masters");


/*
const Person = superclass => class extends superclass {
    walk() {
        console.log("walk")
    }
}

class Human {
    constructor(name) {
        this.name = name;
    }
}

class Teacher extends Person(Human) {
    constructor(...args) {
        super(...args);
        this.degree = degree;
    }
    teach(){
        console.log("teach");
    }
}
*/ 
