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
    isSelected: React.PropTypes.bool
  },

  getDefaultProps () {
    return {
      isSelected: false
    };
  },

  render () {
    const { id, isSelected, index, handleClick, children } = this.props;

    return (
      <li
        key={`tab-${id}`}
        id={`tab-${id}`}
        role='tab'
        aria-controls={`panel-${id}`}
        aria-selected={isSelected}
        onClick={() => handleClick(index)}
        tabIndex={0}>
        {children}
      </li>
    );
  }
});

export default Tab;
