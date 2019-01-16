import { Fragment } from "react";
import PropTypes from "prop-types";

import { BLACK_COLOR, WHITE_COLOR } from "./utils/tokens";
import withPure from "./hoc/withPure";

const TopBar = withPure(({ visible, ...props }) => (
  <Fragment>
    <div className="bar" style={{ opacity: visible ? "1" : "0" }}>
      <div className="bar__content">{props.children}</div>
    </div>
    <style jsx>
      {`
        .bar {
          display: block;
          width: 100vw;
          padding: 5px;
          background: ${BLACK_COLOR};
          text-align: center;
          font-size: 14px;
          color: ${WHITE_COLOR};
          overflow-x: hidden;
          opacity: 1;
          transition: opacity 200ms ease-in-out;
        }
      `}
    </style>
  </Fragment>
));

TopBar.propTypes = {
  children: PropTypes.oneOfType[(PropTypes.string, PropTypes.element)],
  visible: PropTypes.bool.isRequired
};

export default TopBar;
