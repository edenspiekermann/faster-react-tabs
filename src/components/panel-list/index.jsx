import PropTypes from 'prop-types';
import React from 'react';
import Panel from '../panel';

class TabList extends React.Component {
  static defaultProps = {
    selectedIndex: 0,
    JS: true
  };

  static propTypes = {
    sections: PropTypes.array.isRequired,
    selectedIndex: PropTypes.number,
    JS: PropTypes.bool
  };

  render () {
    const { sections, selectedIndex, JS } = this.props;

    return (
      <div>
        {sections.map((section, index) =>
          <Panel
            key={`panel-${section.id || index}`}
            id={section.id || `panel-${index}`}
            isVisible={JS ? selectedIndex === index : true}>
            {!JS
                ? <span>{section.title}</span>
                : null}
            {section.content}
          </Panel>
        )}
      </div>
    );
  }
}

export default TabList;
