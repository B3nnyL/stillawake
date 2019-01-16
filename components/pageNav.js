import Proptypes from "prop-types";
import withPure from "./hoc/withPure";
import Button from "./button";

const PageNav = withPure(({ title = "page" }) => {
  return (
    <div className="nav">
      <div className="nav__title">
        <h2>{title}</h2>
      </div>
      <div className="nav__items">
        <ul>
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
              color="grey"
              className="no-width-lmt link"
              href="mailto:sales@zeit.co"
            >
              Contact Sales
            </Button>
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          .nav {
            text-align: center;
            width: 1018px;
            height: 40px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 40px auto 400px;
            z-index: 300;
          }
          .nav__items {
            grid-column: 3/-1;
            justify-self: end;
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
        `}
      </style>
    </div>
  );
});

PageNav.proptypes = {
  title: Proptypes.string
};

export default PageNav;
