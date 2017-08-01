import PropTypes from 'prop-types';
import React from 'react';
import createReactClass from 'create-react-class';
import PanelList from '../panel-list';
import TabList from '../tab-list';

const Tabs = createReactClass({
  displayName: 'Tabs',

  propTypes: {
    sections: PropTypes.array.isRequired,
    initialIndex: PropTypes.number
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

  handleHash () {
    if (!window) return;

    this.showSection(this.targets.get(window.location.hash) || 0);
  },

  showSection (index) {
    this.setState({ selectedIndex: index });
  },

  componentDidMount () {
    this.setState({ JS: true });

    // Set up initial hash/index mapping
    this.props.sections.forEach((section, index) => {
      let query = '#' + (section.id || `panel-${index}`);
      this.targets.set(query, index);
      this.indexes.set(index, query);
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

  render () {
    return (
      <div>
        {this.state.JS ? <TabList {...this.props} {...this.state} /> : null}
        <PanelList {...this.props} {...this.state} />
      </div>
    );
  }
});

export default Tabs;
