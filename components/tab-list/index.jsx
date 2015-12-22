import React from 'react';
import Tab from '../tab';

const TabList = React.createClass({
  propTypes: {
    sections: React.PropTypes.array.isRequired,
    handleClick: React.PropTypes.func.isRequired,
    selectedIndex: React.PropTypes.number
  },

  getDefaultProps () {
    return {
      selectedIndex: 0
    };
  },

  render () {
    const { sections, handleClick, selectedIndex } = this.props;

    return (
      <ul role='tablist'>
        {sections.map((section, index) =>
          <Tab
            key={`tab-${index}`}
            id={section.id || index}
            isSelected={selectedIndex === index}
            handleClick={handleClick}
            index={index}>
              {section.title}
          </Tab>
        )}
      </ul>
    );
  }
});

export default TabList;
