import React from 'react';
import Panel from '../tab-panel';
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

  render () {
    const { sections } = this.props;

    if (!this.state.jsEnabled) {
      return (
        <div className='tabs'>
          {sections.map((section, index) =>
            <Panel
              key={`panel-${index}`}
              className='tab'
              id={section.id || index}
              title={section.title}>
                {section.content}
            </Panel>
          )}
        </div>
      );
    }

    return (
      <div className='tabs'>
        <ul className='tabs__menu' role='tablist'>
          {sections.map((section, index) =>
            <Tab
              key={`tab-${index}`}
              className='tabs__item'
              id={section.id || index}
              visible={this.state.visibleIndex === index}
              handleClick={this.showSection.bind(this, index)}>
                {section.title}
            </Tab>
          )}
        </ul>

        <div className='tabs__panels'>
          {sections.map((section, index) =>
            <Panel
              key={`panel-${index}`}
              className='tab'
              id={section.id || index}
              visible={this.state.visibleIndex === index}>
                {section.content}
            </Panel>
          )}
        </div>
      </div>
    );
  }
});

export default Tabs;
