import React, { Component } from "react";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: -1 };
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(index) {
    if (index !== this.state.activeIndex) {
      this.setState({ activeIndex: index });
    } else {
      this.setState({ activeIndex: -1 });
    }
  }

  render() {
    console.log("accordion", this.props.children);
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        index: index,
        activeIndex: this.state.activeIndex,
        toggleTab: this.toggleTab
      });
    });
    console.log("children", children);
    return (
      <div className="panel-group" id="accordion1">
        {children}
      </div>
    );
  }
}
