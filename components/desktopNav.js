import React, { Fragment } from "react";
import Link from "next/link";
import Logo from "./logo";
import { PADDING_M } from "./utils/tokens";
import NavLink from "./navLink";
import MenuTop from "./menuTop";
import MenuFooter from "./menuFooter";
import MenuNav from "./menuNavContainer";
import Input from "./input";
import Badge from "./badge";
import ProductItem from "./productItem";
import ProductNav from "./productNavContainer";
import TopBar from "./topbar";
import {
  USE_CASE_CONTENT,
  DEVELOPERS_CONTENT,
  WHY_CONTENT,
  PRODUCT_CONTENT
} from "../utils/navContent";

export default class DesktopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUseCaseOpen: false,
      isDevOpen: false,
      isWhyOpen: false,
      isProductOpen: false,
      isTopbarVisible: true
    };
  }
  handleProductEnter = e => {
    this.setState({ isProductOpen: true });
  };
  handleProductLeave = e => {
    setTimeout(() => {
      this.setState({ isProductOpen: false });
    }, 50);
  };
  handleUseCaseEnter = e => {
    this.setState({ isUseCaseOpen: true });
  };
  handleUseCaseLeave = e => {
    setTimeout(() => {
      this.setState({ isUseCaseOpen: false });
    }, 50);
  };

  handleDevEnter = e => {
    this.setState({ isDevOpen: true });
  };
  handleDevLeave = e => {
    setTimeout(() => {
      this.setState({ isDevOpen: false });
    }, 50);
  };

  handleWhyEnter = e => {
    this.setState({ isWhyOpen: true });
  };
  handleWhyLeave = e => {
    setTimeout(() => {
      this.setState({ isWhyOpen: false });
    }, 50);
  };

  handleTopBarVisible = e => {
    this.setState({ isTopbarVisible: false });
  };

  render() {
    return (
      <Fragment>
        <Fragment>
          <TopBar visible={this.state.isTopbarVisible}> Yo </TopBar>
          <div className="cross" onClick={this.handleTopBarVisible}>
            <div className="cross--left" />
            <div className="cross--right" />
          </div>
        </Fragment>
        <nav>
          <div className="logo-container">
            <Link prefetch href="/">
              <Logo filled size="35px" />
            </Link>
          </div>
          <ul className="start">
            <li
              onMouseEnter={this.handleProductEnter}
              onMouseLeave={this.handleProductLeave}
              className="products"
            >
              <NavLink href="#" up>
                Products
              </NavLink>
              <ProductNav
                ProductItemComp={ProductItem}
                productContents={PRODUCT_CONTENT.links}
                FooterComp={MenuFooter}
                footerContent={PRODUCT_CONTENT.footerContent}
                visible={this.state.isProductOpen}
                top="20px"
                left="10px"
              />
            </li>
            <li
              onMouseEnter={this.handleUseCaseEnter}
              onMouseLeave={this.handleUseCaseLeave}
              className="use-cases"
            >
              <NavLink href="#" up>
                Use Cases
              </NavLink>
              <MenuNav
                CompLeft={MenuTop}
                contentLeft={USE_CASE_CONTENT.subMenuContent[0]}
                CompRight={MenuTop}
                contentRight={USE_CASE_CONTENT.subMenuContent[1]}
                FooterComp={MenuFooter}
                footerContent={USE_CASE_CONTENT.footerContent}
                visible={this.state.isUseCaseOpen}
                top="20px"
                left="0px"
              />
            </li>
            <li>
              <NavLink href="https://zeit.co/pricing" up>
                Pricing
              </NavLink>
            </li>
            <li
              onMouseEnter={this.handleDevEnter}
              onMouseLeave={this.handleDevLeave}
              className="developers"
            >
              <NavLink href="#" up>
                Developers
              </NavLink>
              <MenuNav
                CompLeft={MenuTop}
                contentLeft={DEVELOPERS_CONTENT.subMenuContent[0]}
                CompRight={MenuTop}
                contentRight={DEVELOPERS_CONTENT.subMenuContent[1]}
                FooterComp={MenuFooter}
                footerContent={DEVELOPERS_CONTENT.footerContent}
                visible={this.state.isDevOpen}
                top="20px"
                left="-150px"
              />
            </li>
            <li
              onMouseEnter={this.handleWhyEnter}
              onMouseLeave={this.handleWhyLeave}
              className="why-now"
            >
              <NavLink href="#" up>
                Why Now
              </NavLink>
              <MenuNav
                CompLeft={MenuTop}
                contentLeft={WHY_CONTENT.subMenuContent[0]}
                CompRight={MenuTop}
                contentRight={WHY_CONTENT.subMenuContent[1]}
                FooterComp={MenuFooter}
                footerContent={WHY_CONTENT.footerContent}
                visible={this.state.isWhyOpen}
                top="20px"
                left="-250px"
              />
            </li>
          </ul>
          <ul className="end">
            <li>
              <Input placeholder="Feedbacks..." />
            </li>
          </ul>
          <ul className="flex">
            <li>
              <NavLink href="https://spectrum.chat/zeit" up>
                Chat
              </NavLink>
              <NavLink href="https://spectrum.chat/zeit">
                <Badge>2</Badge>
              </NavLink>
            </li>
          </ul>
          <ul className="end">
            <li>
              <NavLink href="https://zeit.co/login" up>
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
        <style jsx>
          {`
            :global(body) {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Avenir Next,
                Avenir, Helvetica, sans-serif;
              font-size: 14px;
            }
            :global(*) {
              margin: 0;
              padding: 0;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
            }
            :global(h2) {
              font-weight: 500;
              font-size: 16px;
              margin: 2px;
            }
            :global(a) {
              cursor: pointer;
            }
            nav {
              text-align: center;
              width: 1018px;
              height: 84px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 40px 4fr 100px 100px 50px;
            }
            .logo-container {
              align-self: center;
            }
            ul {
              display: flex;
              align-self: center;
            }
            ul.start {
              justify-content: flex-start;
            }
            ul.end {
              justify-content: flex-end;
            }
            nav > ul {
              padding: 0 ${PADDING_M};
            }
            li {
              display: flex;
              padding: 6px 8px 0px 8px;
              position: relative;
            }
            .flex {
              display: flex;
              flex-flow: row wrap;
              justify-content: space-around;
            }

            .cross {
              position: absolute;
              top: 13px;
              right: 20px;
              width: 15px;
              height: 15px;
              z-index: 1000;
            }

            .cross--left {
              border: 1px #fff solid;
              transform: rotate(45deg);
              top: -0.5px;
              position: absolute;
              width: 12px;
            }
            .cross--right {
              border: 1px #fff solid;
              width: 12px;
              transform: rotate(-45deg);
            }
          `}
        </style>
      </Fragment>
    );
  }
}