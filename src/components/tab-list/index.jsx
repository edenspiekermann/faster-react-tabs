import React from 'react';
import Tab from '../tab';

const TabList = React.createClass({
  propTypes: {
    sections: React.PropTypes.array.isRequired,
    selectedIndex: React.PropTypes.number
  },

  getDefaultProps () {
    return {
      selectedIndex: 0
    };
  },

  render () {
    const { sections, selectedIndex } = this.props;

    return (
      <ul role='tablist'>
        {sections.map((section, index) =>
          <Tab
            key={`tab-${section.id || index}`}
            id={'tab-' + (section.id || `panel-${index}`)}
            isSelected={selectedIndex === index}>
              {section.title}
          </Tab>
        )}
      </ul>
    );
  }
});

export default TabList;
