import {Person} from './person';

function promote(){ return 1;}
export default promote;


export default class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log("teach");
    }
}