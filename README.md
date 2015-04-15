# Simple + Clean React Tabs
- Written the "React Way" without hitting the DOM with `refs`.
- ES6, transpiles down to ES5.
- If your app renders server-side, then the tabs can just render as a list for non-JS users.

**Get running locally:**

* `npm install`
* `npm run build`
* `npm run watch`

## Example: Drop-in `Tabs` component
```javascript
'use strict'
var React = require('react');
var Tabs = require('./path/to/tabs/index.jsx');

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

