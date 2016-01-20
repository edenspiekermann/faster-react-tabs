'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = _react2.default.createClass({
  displayName: 'Tab',

  propTypes: {
    children: _react2.default.PropTypes.node.isRequired,
    id: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]).isRequired,
    isSelected: _react2.default.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      isSelected: false
    };
  },
  render: function render() {
    var _props = this.props;
    var isSelected = _props.isSelected;
    var id = _props.id;
    var children = _props.children;

    var href = id.split('tab-')[1];

    return _react2.default.createElement(
      'li',
      {
        id: id,
        role: 'presentation' },
      _react2.default.createElement(
        'a',
        {
          href: '#' + href,
          role: 'tab',
          'aria-controls': href,
          'aria-selected': isSelected },
        children
      )
    );
  }
});

exports.default = Tab;