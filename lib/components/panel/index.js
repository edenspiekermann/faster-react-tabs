'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = _react2.default.createClass({
  displayName: 'Panel',

  propTypes: {
    children: _react2.default.PropTypes.node.isRequired,
    id: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]).isRequired,
    isVisible: _react2.default.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      isVisible: true
    };
  },
  render: function render() {
    var _props = this.props;
    var id = _props.id;
    var isVisible = _props.isVisible;
    var children = _props.children;

    return _react2.default.createElement(
      'div',
      {
        role: 'tabpanel',
        id: id,
        'aria-labelledby': 'tab-' + id,
        'aria-hidden': !isVisible },
      children
    );
  }
});

exports.default = Panel;