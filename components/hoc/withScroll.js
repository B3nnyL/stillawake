import React, { PureComponent, createRef } from "react";
import { findDOMNode } from "react-dom";

const WithScroll = Comp => {
  return class WithScroll extends PureComponent {
    constructor(props) {
      super(props);
      this.myRef = createRef();
      this.state = { posY: 0 };
    }
    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }

    getContainer() {
      return findDOMNode(this);
    }
    handleScroll = () => {
      const scroll = this.getContainer().getBoundingClientRect().y;
      this.setState({ posY: scroll });
    };
    render() {
      return (
        <Comp
          scrollPos={this.state.posY}
          onScroll={this.handleScroll}
          {...this.props}
        />
      );
    }
  };
};

export default WithScroll;
