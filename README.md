# Simple + Clean React Tabs
[Demo here](http://edenspiekermann.github.io/faster-react-tabs/)

- Written the "React Way" without hitting the DOM with `refs`.
- ES6, transpiles down to ES5.
- If your app renders server-side, then the tabs can just render as a list for non-JS users.

##Install
`npm i faster-react-tabs --save` to add to your project.

**Get the example running locally:**

* `npm install`
* `npm run build`
* `npm run watch`

## Example: Drop-in `Tabs` component
`npm i faster-react-tabs --save`

```javascript
'use strict'
var React = require('react');
var Tabs = require('faster-react-tabs');

var YourThing = React.createClass({

  render() {
    var sections = [
      {
        title: "Tab 1",
        content: "Tab 1 content"
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

module.exports = YourThing;
```

