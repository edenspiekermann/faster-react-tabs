import PropTypes from 'prop-types';
import React from 'react';

class ExampleContent extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  };

  render () {
    return (
      <div className='example-content'>
        {this.props.text}
        <img src={this.props.image} alt='I’m an image' />
      </div>
    );
  }
}

export default ExampleContent;
