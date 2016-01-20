'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExampleContent = _react2.default.createClass({
  displayName: 'ExampleContent',

  propTypes: {
    text: _react2.default.PropTypes.string.isRequired,
    image: _react2.default.PropTypes.string.isRequired
  },

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'example-content' },
      _react2.default.createElement(
        'h4',
        null,
        this.props.text
      ),
      _react2.default.createElement('img', { src: this.props.image, alt: 'I’m an image' })
    );
  }
});

exports.default = ExampleContent;