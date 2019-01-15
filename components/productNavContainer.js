import PropTypes from "prop-types";
import classNames from "classnames";

import { RADIUS, INPUT_SHADOW, WHITE_COLOR } from "./utils/tokens";
import withPure from "./hoc/withPure";
const ProductNavContainer = withPure(
  ({
    ProductItemComp,
    FooterComp,
    productContents,
    footerContent,
    visible,
    top = "0px",
    left = "0px"
  }) => {
    const productMenu = (
      <div
        className={classNames("productMenu__container")}
        style={{
          opacity: visible ? "1" : "0",
          zIndex: visible ? "400" : "200",
          top: top,
          left: visible ? left : "-9999px"
        }}
      >
        <div className="productMenu__container--top">
          <div className="items-container">
            {productContents.map(content => (
              <ProductItemComp key={content.label} content={content} />
            ))}
          </div>
        </div>

        {FooterComp && (
          <div className="productMenu__container--bottom">
            <FooterComp content={footerContent} />
          </div>
        )}
        <style jsx>
          {`
            .productMenu__container {
              border-radius: ${RADIUS};
              box-shadow: ${INPUT_SHADOW};
              background-color: ${WHITE_COLOR};
              min-width: 504px;
              max-width: fit-content;
              position: absolute;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: auto auto;
              transition: opacity 200ms ease-in;
            }
            .productMenu__container--top {
              padding: 33px 35px;
              grid-row: 1/2;
              display: grid;
            }
            .productMenu__container--bottom {
              padding: 9px 0px;
              width: 100%;
              text-align: center;
              background: #fafafa;
              grid-row: 2/3;
              grid-column: 1/3;
              border-bottom-left-radius: ${RADIUS};
              border-bottom-right-radius: ${RADIUS};
            }
            .items-container {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
          `}
        </style>
      </div>
    );
    return productMenu;
  }
);

ProductNavContainer.propTypes = {
  ProductItemComp: PropTypes.element.isRequired,
  FooterComp: PropTypes.element.isRequired,
  productContents: PropTypes.array.isRequired,
  footerContent: PropTypes.array.isRequired,
  visible: PropTypes.bool,
  top: PropTypes.string,
  left: PropTypes.string
};

export default ProductNavContainer;
