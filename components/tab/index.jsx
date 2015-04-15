"use strict";
var React = require('react');

var Tab = React.createClass({

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
