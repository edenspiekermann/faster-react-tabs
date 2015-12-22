import React from 'react';
import Panel from '../panel';

const TabList = React.createClass({
  propTypes: {
    sections: React.PropTypes.array.isRequired,
    selectedIndex: React.PropTypes.number.isRequired,
    className: React.PropTypes.string,
    jsEnabled: React.PropTypes.bool
  },

  getDefaultProps () {
    return {
      selectedIndex: 0,
      jsEnabled: true
    };
  },

  render () {
    const { className, selectedIndex, sections, jsEnabled } = this.props;

    return (
      <div className={className + '__panels'}>
        {sections.map((section, index) =>
          <Panel
            key={`panel-${index}`}
            className={className}
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
