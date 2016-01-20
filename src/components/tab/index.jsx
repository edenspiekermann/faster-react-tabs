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
    const href = id.split('tab-')[1];

    return (
      <li
        id={id}
        role='presentation'>
        <a
          href={'#' + href}
          role='tab'
          aria-controls={href}
          aria-selected={isSelected}>
          {children}
        </a>
      </li>
    );
  }
});

export default Tab;
