import React, { Component } from 'react'
import Accordion from './Accordion'
import Search from './Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end Javascript Framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React ...'
  }
];

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Search />
      </div>
    )
  }
};