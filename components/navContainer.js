import classNames from "classnames";

import React, { PureComponent, createRef } from "react";
import TopBar from "./topbar";
import PageNav from "./pageNav";
import DesignAnchorMenu from "./designAnchorMenu";

export default class NavContainer extends PureComponent {
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

  handleScroll = () => {
    const scroll = window.scrollY > 100;
    console.log(scroll);
    this.setState({ posY: scroll });
  };

  render() {
    return (
      <div
        className={this.state.posY ? "nav-wrapper sticky" : "nav-wrapper"}
        ref={this.myRef}
      >
        <PageNav title="Designer" display={this.state.posY}>
          <DesignAnchorMenu />
        </PageNav>
        <style jsx>{`
          .nav-wrapper {
            margin: 0;
            padding: 0;
          }
          .sticky {
            margin: 0 auto;
            padding: 0;
            position: fixed;
            background: white;
            top: 0px;
            left: 0px;
            right: 0px;
            z-index: 1100;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px 0px;
          }
          @media screen and (max-width: 996px) {
            .nav-wrapper {
              display: none;
            }
          }
        `}</style>
      </div>
    );
  }
}
