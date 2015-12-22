import React from 'react';

const Tab = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
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
    const { isSelected, id, children } = this.props;

    return (
      <li
        id={`tab-${id}`}
        role='tab'
        aria-controls={`panel-${id}`}
        aria-selected={isSelected}>
          <a href={`#panel-${id}`}>
            {children}
          </a>
      </li>
    );
  }
});

export default Tab;
