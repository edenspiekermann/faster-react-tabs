import React from 'react';

const Panel = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    isVisible: React.PropTypes.bool
  },

  getDefaultProps () {
    return {
      isVisible: true
    };
  },

  render () {
    const { id, isVisible, children } = this.props;

    return (
      <div
        role='tabpanel'
        id={id}
        aria-labelledby={`tab-${id}`}
        aria-hidden={!isVisible}>
          {children}
      </div>
    );
  }

});

export default Panel;
