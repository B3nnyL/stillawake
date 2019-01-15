import PropTypes from "prop-types";

import withPure from "./hoc/withPure";
import NavLink from "./navLink";

const MenuFooter = withPure(({ content }) => {
  const { badge, href, footerText } = content;
  return (
    <div className="footer-container">
      <NavLink href={href} badge={badge}>
        {footerText}
      </NavLink>
      <style jsx>
        {`
          .footer-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
          }
          .footer-container a {
            max-width: 250px;
            color: #666;
          }
        `}
      </style>
    </div>
  );
});

MenuFooter.propType = {
  content: PropTypes.shape({
    badge: PropTypes.element,
    href: PropTypes.string,
    footerText: PropTypes.string
  })
};
export default MenuFooter;
