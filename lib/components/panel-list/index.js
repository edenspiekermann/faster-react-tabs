'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _panel = require('../panel');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabList = _react2.default.createClass({
  displayName: 'TabList',

  propTypes: {
    sections: _react2.default.PropTypes.array.isRequired,
    selectedIndex: _react2.default.PropTypes.number,
    JS: _react2.default.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      selectedIndex: 0,
      JS: true
    };
  },
  render: function render() {
    var _props = this.props;
    var sections = _props.sections;
    var selectedIndex = _props.selectedIndex;
    var JS = _props.JS;

    return _react2.default.createElement(
      'div',
      null,
      sections.map(function (section, index) {
        return _react2.default.createElement(
          _panel2.default,
          {
            key: 'panel-' + (section.id || index),
            id: section.id || 'panel-' + index,
            isVisible: JS ? selectedIndex === index : true },
          !JS ? _react2.default.createElement(
            'span',
            null,
            'section.title'
          ) : null,
          section.content
        );
      })
    );
  }
});

exports.default = TabList;