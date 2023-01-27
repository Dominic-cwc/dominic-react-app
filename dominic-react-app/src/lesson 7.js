const person = {
    talk(){
        //callback function is a function that is passed as an argument to another function
        setTimeout(() => console.log('hi', this), 1000);
        //arrow function dont rebind this keyword
        //but normal function rebind this keyword
    }
};

person.talk();