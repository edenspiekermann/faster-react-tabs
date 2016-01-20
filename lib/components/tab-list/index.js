'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tab = require('../tab');

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabList = _react2.default.createClass({
  displayName: 'TabList',

  propTypes: {
    sections: _react2.default.PropTypes.array.isRequired,
    selectedIndex: _react2.default.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      selectedIndex: 0
    };
  },
  render: function render() {
    var _props = this.props;
    var sections = _props.sections;
    var selectedIndex = _props.selectedIndex;

    return _react2.default.createElement(
      'ul',
      { role: 'tablist' },
      sections.map(function (section, index) {
        return _react2.default.createElement(
          _tab2.default,
          {
            key: 'tab-' + (section.id || index),
            id: 'tab-' + (section.id || 'panel-' + index),
            isSelected: selectedIndex === index },
          section.title
        );
      })
    );
  }
});

exports.default = TabList;