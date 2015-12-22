import React from 'react';

const Panel = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    visible: React.PropTypes.bool
  },

  getDefaultProps () {
    return {
      visible: true
    };
  },

  render () {
    const { id, visible, children } = this.props;

    return (
      <div
        role='tabpanel'
        id={`panel-${id}`}
        aria-labelledby={`tab-${id}`}
        aria-hidden={!visible}>
          {children}
      </div>
    );
  }

});

export default Panel;
