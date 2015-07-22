"use strict";
import React from 'react';

const Tab = React.createClass({

  render() {
    return (
      <div className="tab">
        {this.props.withTitle ?
          <div>{this.props.title}</div>
        : null}
        {this.props.children}
      </div>
    );
  }

});

module.exports = Tab;
