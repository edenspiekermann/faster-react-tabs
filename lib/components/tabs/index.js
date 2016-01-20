'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _panelList = require('../panel-list');

var _panelList2 = _interopRequireDefault(_panelList);

var _tabList = require('../tab-list');

var _tabList2 = _interopRequireDefault(_tabList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = _react2.default.createClass({
  displayName: 'Tabs',

  propTypes: {
    sections: _react2.default.PropTypes.array.isRequired,
    initialIndex: _react2.default.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      initialIndex: 0
    };
  },

  targets: new Map(),
  indexes: new Map(),

  getInitialState: function getInitialState() {
    return {
      JS: false,
      selectedIndex: this.props.initialIndex
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    this.setState({ JS: true });

    // Set up initial hash/index mapping
    this.props.sections.forEach(function (section, index) {
      var query = '#' + (section.id || 'panel-' + index);
      _this.targets.set(query, index);
      _this.indexes.set(index, query);
    });

    // Handle hash change
    window.addEventListener('hashchange', this.handleHash, false);

    // Handle initial index (if no hash already)
    if (this.props.initialIndex && !window.location.hash) {
      window.location.hash = this.indexes.get(this.props.initialIndex);
    }

    // Initial hash handling
    this.handleHash();
  },
  componentWillUnmount: function componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHash, false);
  },
  handleHash: function handleHash() {
    if (!window) return;

    this.showSection(this.targets.get(window.location.hash) || 0);
  },
  showSection: function showSection(index) {
    this.setState({ selectedIndex: index });
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      this.state.JS ? _react2.default.createElement(_tabList2.default, _extends({}, this.props, this.state)) : null,
      _react2.default.createElement(_panelList2.default, _extends({}, this.props, this.state))
    );
  }
});

exports.default = Tabs;