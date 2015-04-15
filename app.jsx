var React = require('react');
var Tabs = require('./components/tabs/index.jsx');

var App = React.createClass({

  render() {

    //// EXAMPLE SET OF TAB ITEMS. REPLACE THIS WITH YOURS.
    ////
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
    ////
    ////

    return (
      <div>
        <Tabs sections={sections} />
      </div>
    )
  }

});

React.render(<App />, document.getElementById("app"));
