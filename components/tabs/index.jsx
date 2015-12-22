import React from 'react';
import PanelList from '../panel-list';
import TabList from '../tab-list';

const Tabs = React.createClass({
  propTypes: {
    sections: React.PropTypes.array.isRequired,
    initialIndex: React.PropTypes.number
  },

  getDefaultProps () {
    return {
      initialIndex: 0
    };
  },

  targets: new Map(),
  indexes: new Map(),

  getInitialState () {
    return {
      JS: false,
      selectedIndex: this.props.initialIndex
    };
  },

  componentDidMount () {
    this.setState({ JS: true });

    // Set up initial hash/index mapping
    this.props.sections.forEach((section, index) => {
      this.targets.set(`#panel-${section.id || index}`, index);
      this.indexes.set(index, `#panel-${section.id || index}`);
    });

    // Handle hash change
    window.addEventListener('hashchange', this.handleHash, false);

    // Handle initial index (if no hash already)
    if (this.props.initialIndex && !window.location.hash) {
      window.location.hash = this.indexes.get(this.props.initialIndex);
    }

    // Initial hash handling
    this.handleHash();
  },

  componentWillUnmount () {
    window.removeEventListener('hashchange', this.handleHash, false);
  },

  handleHash () {
    if (!window) return;

    this.showSection(this.targets.get(window.location.hash) || 0);
  },

  showSection (index) {
    this.setState({ selectedIndex: index });
  },

  render () {
    return (
      <div>
        {this.state.JS
          ? <TabList {...this.props} {...this.state} />
          : null}
        <PanelList {...this.props} {...this.state} />
      </div>
    );
  }
});

export default Tabs;
