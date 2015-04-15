'use strict';
var React = require('react');
var classnames = require('classnames');

var Tab = require('../tab');

var Tabs = React.createClass({

  propTypes: {
    sections: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object
    ]).isRequired
  },

  getInitialState() {
    return {
      jsEnabled: false,
      visibleIndex: 0
    };
  },

  componentDidMount() {
    this.setState({ jsEnabled: true });
  },

  render() {

    if ( ! this.state.jsEnabled) {
      return (
        <div className="tabs">
          {this.props.sections.map((section, index) =>
            <Tab withTitle={true} title={section.title} key={index}>
              {section.content}
            </Tab>
          )}
        </div>
      );
    }

    function classes(index) {
      return classnames({
        'tabs__item': true,
        'tabs__item--active': this.state.visibleIndex === index
      });
    }

    return (
      <div>
        <nav>
          <ul className='tabs__menu'>
            {this.props.sections.map((section, index) =>
              <li key={index} className={classes.call(this, index)}>
                <button className='tabs__button' onClick={this.showSection.bind(this, index)}>
                  {section.title}
                </button>
              </li>
            )}
          </ul>
        </nav>
        <Tab title={this.props.sections[this.state.visibleIndex].title}>
          {this.props.sections[this.state.visibleIndex].content}
        </Tab>
      </div>
    );
  },

  showSection(index) {
    this.setState({ visibleIndex: index});
  }

});

module.exports = Tabs;
