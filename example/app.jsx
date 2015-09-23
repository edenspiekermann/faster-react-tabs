"use strict";
import React from 'react';
import Tabs from '../components/tabs/index.jsx';

const App = React.createClass({

  render() {

    //// EXAMPLE SET OF TAB ITEMS. REPLACE THIS CONTENT WITH YOURS.
    ////
    const sections = [
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
