import PropTypes from 'prop-types';
import React from 'react';

class Tab extends React.Component {
  static defaultProps = {
    isSelected: false
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    isSelected: PropTypes.bool
  };

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
}

export default Tab;
