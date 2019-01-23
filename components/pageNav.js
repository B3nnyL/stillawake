import Proptypes from "prop-types";
import withPure from "./hoc/withPure";
import Button from "./button";
import Logo from "./logo";
import NavLink from "./navLink";
import { Fragment } from "react";

const PageNav = withPure(({ display, title, children }) => {
  return (
    <div className="nav">
      {display ? (
        <div className="nav__logo">
          <NavLink href="#hero">
            <Logo size={20} />
          </NavLink>
        </div>
      ) : (
        <Fragment />
      )}
      <h2 className="nav__title">{title || "page"}</h2>
      <div className="nav__items">
        <ul>{children}</ul>
      </div>
      <style jsx>
        {`
          .nav {
            text-align: center;
            width: 1018px;
            height: 40px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 40px 40px auto 400px;
            z-index: 300;
          }
          .nav__items {
            grid-column: 3/-1;
            justify-self: end;
            align-self: center;
          }
          .nav__title {
            font-size: 16px;
            align-self: center;
          }
          .nav__logo {
            align-self: center;
          }
          ul {
            display: flex;
            align-self: end;
          }

          .nav > ul {
            padding: 0 10px;
          }
          li {
            display: flex;
            padding: 6px 8px;
            position: relative;
          }

          .flex {
            display: flex;
            grid-column: 1/2;
          }

          @media screen and (max-width: 996px) {
            .nav {
              text-align: center;
              width: 100vw;
              height: 40px;
              margin: 0px auto;
              display: grid;
              grid-template-columns: 10px 40px 40px auto 150px 10px;
              z-index: 300;
            }
            .nav__title {
              grid-column: 2/3;
              display: none;
            }
            .nav__items {
              grid-column: 3/-1;
              justify-self: end;
            }
            .nav__logo {
              grid-column: 2/3;
            }
          }
        `}
      </style>
    </div>
  );
});

PageNav.proptypes = {
  title: Proptypes.string
};

export default PageNav;
