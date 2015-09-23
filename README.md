# Simple + Clean React Tabs

[![npm version](https://badge.fury.io/js/faster-react-tabs.svg)](http://badge.fury.io/js/faster-react-tabs)

[Demo here](http://edenspiekermann.github.io/faster-react-tabs/)

- Written the "React Way" without hitting the DOM with `refs`.
- ES6, transpiles down to ES5.
- If your app renders server-side, then the tabs can just render as a list for non-JS users.

## Install
`$ npm i faster-react-tabs --save` to add to your project.

**Get the example running locally:**

```
$ cd faster-react-tabs/
$ npm install
$ npm run build
$ npm run watch
```

## Example: Drop-in `Tabs` component
`$ npm i faster-react-tabs --save`

```javascript
'use strict'
import React from 'react';
import Tabs from 'faster-react-tabs';
import ExampleContent from '../components/example-content/index.jsx';

const YourThing = React.createClass({

  render() {
    const sections = [
      {
        title: "Tab 1",
        content: <ExampleContent image='images/1.jpeg' text='This is in tab 1. It is a whole other component! Entire components can be passed down into each tab.' />
      },
      {
        title: "Tab 2",
        content: "Tab 2 content"
      },
      {
        title: "Tab 3",
        content: "Tab 3 content"
      }
    ];

    return (
      <div>
        <Tabs sections={sections} />
      </div>
    );
  }

});

export default YourThing;
```

