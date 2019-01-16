import PropTypes from "prop-types";
import NavLink from "./navLink";
import Logo from "./logo";
import { Fragment, Component } from "react";
import Button from "./button";
import Input from "./input";
import { PRODUCT_CONTENT, USE_CASE_CONTENT } from "../utils/navContent";
import SearchIcon from "../utils/searchIcon";
import NavIcon from "../utils/navIcon";
import TopBar from "./topbar";

export default class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchClicked: false,
      isToggleClicked: false,
      isTopbarVisible: true
    };
  }
  onSearchClick = e => {
    this.state.isSearchClicked
      ? this.setState({ isSearchClicked: false, isToggleClicked: false })
      : this.setState({ isSearchClicked: true, isToggleClicked: false });
  };
  onToggleClick = e => {
    this.state.isToggleClicked
      ? this.setState({ isToggleClicked: false })
      : this.setState({ isToggleClicked: true, isSearchClicked: false });
  };
  handleTopBarVisible = e => {
    this.setState({ isTopbarVisible: false });
  };
  render() {
    return (
      <Fragment>
        {/* <div>
          <TopBar visible={this.state.isTopbarVisible}> Yo</TopBar>
          <div className="cross" onClick={this.handleTopBarVisible}>
            <div className="cross--left" />
            <div className="cross--right" />
          </div>
        </div> */}
        <nav style={{ height: this.state.isToggleClicked ? "100vh" : "100px" }}>
          <div className="top container">
            <div className="logo">
              <NavLink href="#">
                <Logo filled white />
                <h2>Now</h2>
              </NavLink>
            </div>
            <div className="tool">
              <ul>
                <li>
                  <NavLink up>login</NavLink>
                </li>
                <li onClick={this.onSearchClick} className="search-btn">
                  <a>
                    <SearchIcon />
                  </a>
                </li>
                <li onClick={this.onToggleClick} className="nav-toggle">
                  <a>
                    <NavIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <ul
            className="search container"
            style={{
              opacity: this.state.isSearchClicked ? "1" : "0",
              top: this.state.isSearchClicked ? "0px" : "-999px"
            }}
          >
            <li>
              <Input placeholder="FEEDBACKS." width={95} />
            </li>
          </ul>
          <NavList
            productContents={PRODUCT_CONTENT.links}
            useCaseContents={USE_CASE_CONTENT.subMenuContent[1].links}
            visible={this.state.isToggleClicked}
          />
        </nav>
        <style jsx>
          {`
            nav {
              width: 100vw;
              height: auto;
              display: grid;
              grid-template-columns: 5vw auto 5vw;
              grid-template-rows: 84px 50px auto;
              overflow-x: hidden;
              position: relative;
            }

            .top {
              grid-row: 1/2;
              grid-column: 2/3;
              display: grid;
              grid-template-columns: 1fr 200px;
              align-items: start;
              z-index: 200;
              position: fixed;
              background: white;
              width: 100%;
            }
            .tool > ul {
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
            }
            .top h2 {
              color: #000;
              margin-left: 10px;
            }
            .container {
              padding: 24px 16px;
              border-bottom: 1px #eaeaea solid;
              grid-column: 2/3;
              justify-content: center;
              margin-top: 27px;
            }
            .container h2 {
              margin-bottom: 14px;
            }
            .container li {
              margin: 5px 0;
            }

            .search {
              grid-row: 2/3;
              display: grid;
              grid-template-columns: 1fr;
              padding: 24px 0px;
              align-items: center;
              opacity: 0;
              transition: opacity 200ms ease-in;
              position: absolute;
              width: 100%;
            }
            .cross {
              position: absolute;
              top: 15px;
              right: 20px;
              width: 15px;
              height: 15px;
              z-index: 1500;
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

const NavList = ({ productContents, useCaseContents, visible }) => (
  <div
    className="navlist-container"
    style={{ opacity: visible ? "1" : "0", top: visible ? "0px" : "-999px" }}
  >
    <ul className="product container">
      <h2>Products</h2>
      {productContents.map(({ href, label, badge }) => (
        <li key={label}>
          <NavLink href={href} badge={badge}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
    <ul className="use container">
      <h2>Use cases</h2>
      {useCaseContents.map(({ href, label, badge }) => (
        <li key={label}>
          <NavLink href={href} badge={badge}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
    <ul className="pricing container">
      <li>
        <NavLink href="pricing" up>
          <h2>View Pricing</h2>
        </NavLink>
      </li>
    </ul>
    <ul className="cta container">
      <li>
        <Button
          color="pink"
          className="no-width-lmt link"
          href="https://zeit.co/signup"
        >
          Join Free
        </Button>
      </li>
      <li>
        <Button
          color="white"
          className="no-width-lmt link"
          href="mailto:sale@zeit.co"
        >
          Contact Sales
        </Button>
      </li>
    </ul>
    <style jsx>
      {`
        .navlist-container {
          grid-row-start: 2;
          grid-column: 2/4;
          transition: opacity 200ms ease-in;
          display: grid;
          grid-template-rows: 264px 264px 1fr;
          position: absolute;
          width: 95%;
        }

        .container {
          padding: 24px 16px;
          border-bottom: 1px #eaeaea solid;
          justify-content: center;
        }
        .container h2 {
          margin-bottom: 14px;
          text-transform: uppercase;
        }
        .container li {
          margin: 5px 0;
        }
        .product {
          grid-row: 1/2;
          display: flex;
          flex-direction: column;
          margin-top: 30px;
        }

        .use {
          grid-row: 2/3;
          display: flex;
          flex-direction: column;
        }
        .pricing {
          grid-row: 3/4;
          justify-content: space-around;
        }
        .pricing h2 {
          color: #000;
        }
        .cta {
          grid-row: 4 / span;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
        }
      `}
    </style>
  </div>
);

NavList.propTypes = {
  productContents: PropTypes.array,
  useCaseContents: PropTypes.array,
  visible: PropTypes.bool
};
