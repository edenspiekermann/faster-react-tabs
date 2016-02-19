# Faster React Tabs

Faster React Tabs is a flexible and context-agnostic React component used to render accessible and simple tabs. You can [play with the only demo](http://edenspiekermann.github.io/faster-react-tabs/).

Making accessible tabs is not an easy task. Fortunately, this React component is built with all the good practices about tabs in mind. On top of that, it provides a non-JavaScript fallback for users with JS disabled or server-side rendering.

[![npm version](https://badge.fury.io/js/faster-react-tabs.svg)](http://badge.fury.io/js/faster-react-tabs)

## Install

```sh
npm i faster-react-tabs --save
```

## Nerdy technical details

- Written the “React Way” without hitting the DOM with `refs`.
- Written in ES6, transpiled down to ES5.

## Example: drop-in `Tabs` component

```javascript
import React from 'react';
import Tabs from 'faster-react-tabs';
import ExampleContent from '../components/example-content/index.jsx';

const YourThing = React.createClass({

  render() {
    const sections = [
      {
        title: 'Tab 1',
        content: <ExampleContent image='images/1.jpeg' text='This is in tab 1. It is a whole other component! Entire components can be passed down into each tab.' />
      },
      {
        title: 'Tab 2',
        content: 'Tab 2 content'
      },
      {
        title: 'Tab 3',
        content: 'Tab 3 content'
      }
    ];

    return (
      <Tabs sections={sections} />
    );
  }

});

export default YourThing;
```


## Development

```sh
npm install
npm run build
npm run watch
```
