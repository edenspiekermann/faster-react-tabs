import React from 'react';

const Tab = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    handleClick: React.PropTypes.func.isRequired,
    index: React.PropTypes.number.isRequired,
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
    const { id, selected, className, index, handleClick, children } = this.props;

    return (
      <li
        className={className + '__item'}
        key={`tab-${id}`}
        id={`tab-${id}`}
        role='tab'
        aria-controls={`panel-${id}`}
        aria-selected={selected}
        onClick={() => handleClick(index)}
        tabIndex={0}>
        {children}
      </li>
    );
  }
});

export default Tab;
