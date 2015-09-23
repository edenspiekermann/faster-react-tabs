import React from 'react';

const Tab = React.createClass({

  propTypes: {
    title: React.PropTypes.string
  },

  render() {
    const { title } = this.props;

    return (
      <div className="tab">
        {title ?
          <div>{title}</div>
        : null}

        {this.props.children}
      </div>
    );
  }

});

export default Tab;
