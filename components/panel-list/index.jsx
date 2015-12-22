import React from 'react';
import Panel from '../panel';

const TabList = React.createClass({
  propTypes: {
    sections: React.PropTypes.array.isRequired,
    selectedIndex: React.PropTypes.number,
    JS: React.PropTypes.bool
  },

  getDefaultProps () {
    return {
      selectedIndex: 0,
      JS: true
    };
  },

  render () {
    const { sections, selectedIndex, JS } = this.props;

    return (
      <div>
        {sections.map((section, index) =>
          <Panel
            key={`panel-${index}`}
            id={section.id || index}
            isVisible={JS ? selectedIndex === index : true}>
              {!JS
                ? <span>section.title</span>
                : null}
              {section.content}
          </Panel>
        )}
      </div>
    );
  }
});

export default TabList;
