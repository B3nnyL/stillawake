import classNames from "classnames";
import PropTypes from "prop-types";

import withPure from "./hoc/withPure";
import Badge from "./badge";
import { BLACK_COLOR, BLACK_COLOR_A2, BLUE_COLOR } from "./utils/tokens";
import Link from "next/link";

const NavLink = withPure(
  ({ children, href, className, up, prefetch, badge, alias, ...props }) => {
    const navLink = (
      <div className="navlink-container">
        <Link
          role="link"
          href={href}
          prefetch={prefetch}
          as={`${alias}`}
          style={{ textTransform: up ? "uppercase" : "capitalize" }}
          {...props}
        >
          <a className={classNames(className)}>
            {children}
            {badge && <Badge>{badge}</Badge>}
          </a>
        </Link>
        <style jsx>
          {`
            a {
              display: flex;
              cursor: pointer;
              text-decoration: none;
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              line-height: 1.33;
              letter-spacing: normal;
              color: ${BLACK_COLOR_A2};
              margin: 0;
              transition: all 0.2s ease;
              font-size: 14px;
            }
            a:hover {
              color: ${BLACK_COLOR};
            }
            a.with-line {
            }
            a.with-line:hover {
              color: ${BLACK_COLOR_A2};
              text-decoration: underline;
            }

            .blue {
              color: ${BLUE_COLOR};
            }

            @media (max-width: 997px) {
              a {
                font-size: 14px;
              }
            }
          `}
        </style>
      </div>
    );
    return navLink;
  }
);

NavLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.any
  ]),
  href: PropTypes.string,
  className: PropTypes.string,
  up: PropTypes.bool,
  prefetch: PropTypes.bool,
  badge: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

export default NavLink;
