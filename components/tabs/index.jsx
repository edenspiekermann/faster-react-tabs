import React from 'react';
import PanelList from '../panel-list';
import TabList from '../tab-list';

const Tabs = React.createClass({
  propTypes: {
    sections: React.PropTypes.array.isRequired,
    defaultIndex: React.PropTypes.number,
    className: React.PropTypes.string
  },

  getDefaultProps () {
    return {
      defaultIndex: 0,
      className: 'tabs'
    };
  },

  getInitialState () {
    return {
      jsEnabled: false,
      selectedIndex: this.props.defaultIndex
    };
  },

  componentDidMount () {
    this.setState({ jsEnabled: true });
  },

  showSection (index) {
    this.setState({ selectedIndex: index });
  },

  render () {
    return (
      <div className={this.props.className}>
        {this.state.jsEnabled
          ? <TabList {...this.props} {...this.state} handleClick={this.showSection} />
          : null}
        <PanelList {...this.props} {...this.state} />
      </div>
    );
  }
});

export default Tabs;
