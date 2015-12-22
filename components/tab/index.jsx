import React from 'react';
import Panel from '../tab-panel';

const Tab = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    handleClick: React.PropTypes.func.isRequired,
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    className: React.PropTypes.string,
    selected: React.PropTypes.bool
  },

  getDefaultProps () {
    return {
      selected: false
    };
  },

  render () {
    const { id, selected, className, children } = this.props;

    return (
      <li
        className={className}
        key={`tab-${id}`}
        id={`tab-${id}`}
        role='tab'
        aria-controls={`panel-${id}`}
        aria-selected={selected}
        onClick={this.handleClick}
        tabIndex={0}>
        {children}
      </li>
    );
  }
});

export default Tab;
