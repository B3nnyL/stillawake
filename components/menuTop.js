import PropTypes from "prop-types";

import NavLink from "./navLink";
import withPure from "./hoc/withPure";
import { WHITE_COLOR_A1 } from "./utils/tokens";
const MenuTop = withPure(({ content }) => {
  const { headerText, links = [], menuPos } = content;
  return (
    <div className={menuPos}>
      <h3>{headerText}</h3>
      <ul>
        {links.map(({ href, label, badge, alias }) => (
          <li key={label}>
            <NavLink href={href} badge={badge} alias={alias}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          .left,
          .right {
            padding: 20px;
            width: 197px;
            text-align: left;
          }
          h3 {
            font-size: 14px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-transform: uppercase;
            margin: 0 0 10px 0;
          }
          ul {
            margin: 0px;
            padding: 0px;
          }
          ul > li {
            padding-bottom: 10px;
            list-style: none;
          }
          .left {
            grid-column: 1/2;
          }
          .right {
            border-left: 1px ${WHITE_COLOR_A1} solid;
            grid-column: 2/3;
          }
        `}
      </style>
    </div>
  );
});

MenuTop.propTypes = {
  content: PropTypes.shape({
    headerText: PropTypes.string,
    links: PropTypes.array,
    menuPos: PropTypes.string,
    children: PropTypes.string
  })
};

export default MenuTop;
