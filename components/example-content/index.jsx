import React from 'react';

const ExampleContent = React.createClass({

  render() {
    return (
      <div className="example-content">
        <h4>{this.props.text}</h4>
        <img src={this.props.image} alt="I'm an image" />
      </div>
    );
  }

});

export default ExampleContent;
