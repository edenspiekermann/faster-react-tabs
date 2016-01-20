'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../components/tabs/index.jsx');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../components/example-content/index.jsx');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = _react2.default.createClass({
  displayName: 'App',
  render: function render() {
    // EXAMPLE SET OF TAB ITEMS. REPLACE THIS CONTENT WITH YOURS.
    var sections = [{
      title: 'Tab 1',
      content: _react2.default.createElement(_index4.default, { image: 'images/1.jpeg', text: 'This is in tab 1. It is a whole other component! Entire components can be passed down into each tab.' })
    }, {
      id: 'foobar',
      title: 'Tab 2',
      content: 'Tab 2 content'
    }, {
      title: 'Tab 3',
      content: 'Tab 3 content'
    }];

    return _react2.default.createElement(_index2.default, { sections: sections });
  }
});

_react2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));