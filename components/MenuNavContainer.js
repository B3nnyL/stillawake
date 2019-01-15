import PropTypes from "prop-types";
import classNames from "classnames";

import withPure from "./hoc/withPure";
import { RADIUS, INPUT_SHADOW, WHITE_COLOR } from "./utils/tokens";

const MenuNavContainer = withPure(
  ({
    CompLeft,
    CompRight,
    FooterComp,
    contentLeft,
    contentRight,
    footerContent,
    visible,
    top = "0px",
    left = "0px"
  }) => {
    const menu = (
      <div
        className={classNames("menu__container")}
        style={{
          opacity: visible ? "1" : "0",
          zIndex: visible ? "400" : "200",
          left: visible ? left : "-9999px",
          top: visible ? top : "0px"
        }}
      >
        <div className="menu__container--top">
          <CompLeft content={contentLeft} />
          {CompRight && <CompRight content={contentRight} />}
        </div>
        <div className="menu__container--bottom">
          <FooterComp content={footerContent} />
        </div>
        <style jsx>
          {`
            .menu__container {
              border-radius: ${RADIUS};
              box-shadow: ${INPUT_SHADOW};
              background-color: ${WHITE_COLOR};
              min-width: 504px;
              max-width: fit-content;
              position: absolute;
              top: 28px;
              display: grid;
              z-index: 200;
              grid-template-columns: 1fr;
              grid-template-rows: auto auto;
              transition: opacity 200ms ease-in;
            }
            .menu__container--top {
              padding: 23px 40px;
              grid-row: 1/2;
              display: grid;
            }
            .menu__container--bottom {
              padding: 9px 0;
              margin: auto;
              text-align: center;
              background: #fafafa;
              grid-row: 3/-1;
              border-bottom-left-radius: ${RADIUS};
              border-bottom-right-radius: ${RADIUS};
              width: 100%;
            }
            .invisible {
              left: -9999px;
              opacity: 0;
              transition: opacity 1s;
              display: block;
            }
            .visible {
              opacity: 1;
            }
          `}
        </style>
      </div>
    );
    return menu;
  }
);

MenuNavContainer.propTypes = {
  CompLeft: PropTypes.element.isRequired,
  CompRight: PropTypes.element.isRequired,
  FooterComp: PropTypes.element.isRequired,
  contentLeft: PropTypes.object,
  contentRight: PropTypes.object,
  footerContent: PropTypes.object,
  visible: PropTypes.bool,
  top: PropTypes.string,
  left: PropTypes.string
};

export default MenuNavContainer;
