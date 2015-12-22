import React from 'react';
import PanelList from '../panel-list';
import TabList from '../tab-list';

const Tabs = React.createClass({
  propTypes: {
    sections: React.PropTypes.array.isRequired,
    defaultIndex: React.PropTypes.number
  },

  getDefaultProps () {
    return {
      defaultIndex: 0
    };
  },

  getInitialState () {
    return {
      JS: false,
      selectedIndex: this.props.defaultIndex
    };
  },

  componentDidMount () {
    this.setState({ JS: true });
  },

  showSection (index) {
    this.setState({ selectedIndex: index });
  },

  render () {
    return (
      <div>
        {this.state.JS
          ? <TabList {...this.props} {...this.state} handleClick={this.showSection} />
          : null}
        <PanelList {...this.props} {...this.state} />
      </div>
    );
  }
});

export default Tabs;
