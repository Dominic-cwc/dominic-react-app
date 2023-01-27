import React from 'react';
import ReactDOM from 'react-dom';
import { Teacher } from './classes(11-13)/teacher';
import './css/style.css'


const teacher = new Teacher("Dominic", "Masters");
teacher.teach();

const colors = ['red', 'green', 'blue'];
const items = colors.map(color => <li>{color}</li>); //using `` can map those the html tag together?

ReactDOM.render(<ol>{items}</ol>, document.getElementById('root'));