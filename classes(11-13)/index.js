import React from 'react';
import ReactDOM from 'react-dom';
import Teacher from './classes(11-13)/teacher';
import promote from './classes(11-13)/teacher';
import './css/style.css';

// Default ->  import ... from '';
// Named -> import { ... } from '';

const teacher = new Teacher("Dominic", "Masters123");
teacher.teach();
console.log(promote());
const colors = ['red', 'green', 'yellow'];
const items = colors.map(color => <li>{color}</li>); //using `` can map those the html tag together?

ReactDOM.render(<ol>{items}</ol>, document.getElementById('root'));