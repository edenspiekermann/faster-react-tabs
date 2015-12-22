import React from 'react';

const Panel = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    visible: React.PropTypes.bool,
    title: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node
  },

  getDefaultProps () {
    return {
      visible: true
    };
  },

  render () {
    const { id, title, visible, className, children } = this.props;

    return (
      <div
        className={className}
        role='tabpanel'
        id={`panel-${id}`}
        aria-labelledby={`tab-${id}`}
        aria-hidden={!visible}>
          {title}
          {children}
      </div>
    );
  }

});

export default Panel;
