import React from 'react';
import Panel from '../panel';

const TabList = React.createClass({
  propTypes: {
    sections: React.PropTypes.array.isRequired,
    selectedIndex: React.PropTypes.number.isRequired,
    jsEnabled: React.PropTypes.bool
  },

  getDefaultProps () {
    return {
      selectedIndex: 0,
      jsEnabled: true
    };
  },

  render () {
    const { selectedIndex, sections, jsEnabled } = this.props;

    return (
      <div>
        {sections.map((section, index) =>
          <Panel
            key={`panel-${index}`}
            id={section.id || index}
            visible={jsEnabled ? selectedIndex === index : true}
            title={jsEnabled ? null : section.title}>
              {section.content}
          </Panel>
        )}
      </div>
    );
  }
});

export default TabList;
