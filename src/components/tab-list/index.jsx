import PropTypes from 'prop-types';
import React from 'react';
import Tab from '../tab';

class TabList extends React.Component {
  static defaultProps = {
    selectedIndex: 0
  };

  static propTypes = {
    sections: PropTypes.array.isRequired,
    selectedIndex: PropTypes.number
  };

  render () {
    const { sections, selectedIndex } = this.props;

    return (
      <ul role='tablist'>
        {sections.map((section, index) =>
          <Tab
            key={`tab-${section.id || index}`}
            id={'tab-' + (section.id || `panel-${index}`)}
            isSelected={selectedIndex === index}
          >
            {section.title}
          </Tab>
        )}
      </ul>
    );
  }
}

export default TabList;
