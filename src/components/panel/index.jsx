import PropTypes from 'prop-types';
import React from 'react';

class Panel extends React.Component {
  static defaultProps = {
    isVisible: true
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    isVisible: PropTypes.bool
  };

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
}

export default Panel;
