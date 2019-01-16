import { Fragment } from "react";
import PropTypes from "prop-types";

import NavLink from "./navLink";
import Logo from "./logo";
import withPure from "./hoc/withPure";

const ProductItem = withPure(({ content }) => {
  const productItem = (
    <Fragment>
      <div key={content.label} className="item-wrapper">
        <div className="item__title">
          <Logo />
          <NavLink href={content.href} badge={content.badge}>
            <h3>{content.label || "label"}</h3>
          </NavLink>
        </div>
        <p>{content.desc}</p>
      </div>
      <style jsx>
        {`
          .item-wrapper {
            width: 200px;
            height: 70px;
            padding: 10px;
          }
          .item__title {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          }
          h3 {
            font-weight: 600;
            color: black;
            margin: 0 5px;
            line-height: 1;
          }
          p {
            padding-top: 7px;
            font-size: 14px;
            margin-left: 20px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #999;
            text-align: left;
          }
        `}
      </style>
    </Fragment>
  );
  return productItem;
});

ProductItem.propTypes = {
  content: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
    badge: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    desc: PropTypes.string
  }),
  children: PropTypes.element
};

export default ProductItem;
