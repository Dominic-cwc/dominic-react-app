import React from 'react';
import ReactDOM from 'react-dom';

// let -> block
//const -> block/constant


const person = {
    name: 'Dominic',
    walk() {console.log(this)},
    talk() {}
};

person.walk();

const walk = person.walk.bind(person); //function in js are objects
walk();

//walk(); stand alone function, this is window object reference
//person.walk(); method, this is person object reference

//Arrow functions
//both same below
/*const square = function(number) {
    return number * number;
};

const square = number => number * number;
*/
const square = number => number * number;
console.log(square(5));

//Arrow functions and this
const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
]

const activeJobs = jobs.filter(a => a.isActive); //objects of jobs applied into filter
console.log(activeJobs);