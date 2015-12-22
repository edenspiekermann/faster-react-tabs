import React from 'react';
import Tab from '../tab';

const Tabs = React.createClass({
  propTypes: {
    sections: React.PropTypes.array.isRequired
  },

  getInitialState () {
    return {
      jsEnabled: false,
      visibleIndex: 0
    };
  },

  componentDidMount () {
    this.setState({ jsEnabled: true });
  },

  showSection (index) {
    this.setState({ visibleIndex: index });
  },

  renderTab (section, index) {
    return (
      <li
        className='tabs__item'
        id={`tab-${section.id || index}`}
        role='tab'
        aria-controls={`panel-${section.id || index}`}
        aria-selected={this.state.visibleIndex === index}
        key={`tab-${index}`}
        onClick={this.showSection.bind(this, index)}
        tabIndex={0}>
        {section.title}
      </li>
    );
  },

  renderPanel (section, index) {
    return (
      <Tab
        key={`panel-${index}`}
        id={section.id || index}
        visible={this.state.visibleIndex === index}>
        {section.content}
      </Tab>
    );
  },

  renderNoJSPanel (section, index) {
    return (
      <Tab
        key={`panel-${index}`}
        id={section.id || index}
        title={section.title}>
        {section.content}
      </Tab>
    );
  },

  render () {
    const { sections } = this.props;

    if (!this.state.jsEnabled) {
      return (
        <div className='tabs'>
          {sections.map(this.renderNoJSPanel)}
        </div>
      );
    }

    return (
      <div className='tabs'>
        <ul className='tabs__menu' role='tablist'>
          {sections.map(this.renderTab)}
        </ul>

        <div className='tabs__panels'>
          {sections.map(this.renderPanel)}
        </div>
      </div>
    );
  }
});

export default Tabs;
