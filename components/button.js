import Link from "next/link";
import classNames from "classnames";
import PropTypes from "prop-types";

import WithPure from "./hoc/withPure";
import {
  BLACK_COLOR,
  BLUE_COLOR,
  WHITE_COLOR,
  BUTTON_SHADOW,
  LARGE_BUTTON_HEIGHT,
  SMALL_BUTTON_HEIGHT,
  LARGE_BUTTON_WIDTH,
  SMALL_BUTTON_WIDTH,
  RADIUS,
  BLACK_COLOR_A1,
  WHITE_COLOR_A1
} from "./utils/tokens";

const Button = WithPure(
  ({ children, color, size, href, className, prefetch, ...props }) => {
    const button = (
      <a
        className={classNames(className, color, size)}
        role="button"
        {...props}
      >
        {children}
        <style jsx>
          {`
            a {
              display: inline-block;
              cursor: pointer;
              text-decoration: none;
              padding: 0.1rem 0.5rem;
              margin: -0.25rem 0.5rem;
              height: ${LARGE_BUTTON_HEIGHT};
              min-width: ${LARGE_BUTTON_WIDTH};
              border: 1px ${BLUE_COLOR} solid;
              border-radius: ${RADIUS};
              color: ${WHITE_COLOR};
              background: ${BLUE_COLOR};
              transition: background 0.2s ease, color 0.2s ease,
                border 0.2s ease, box-shadow 0.2s ease;
              font-size: 14px;
              text-transform: uppercase;
              box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);
            }
            a:hover {
              color: ${BLUE_COLOR};
              background: ${WHITE_COLOR};
              box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);
            }
            a.black {
              margin: 0;
              padding: 0 2rem;
              line-height: 2.5rem;
              border-radius: 7px;
              background: ${BLACK_COLOR};
              box-shadow: ${BUTTON_SHADOW};
              color: ${WHITE_COLOR};
            }
            a.black:hover {
              background: ${WHITE_COLOR};
              color: ${BLACK_COLOR};
              box-shadow: 0 6px 20px rgba(0, 0, 0, 0.23);
            }
            a.black:active {
              background: ${BLACK_COLOR};
            }
            a.white {
              border: 0px ${WHITE_COLOR_A1} solid;
              border-radius: 7px;
              background: ${WHITE_COLOR};
              color: ${BLACK_COLOR_A1};
              box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            }
            a.white:hover {
              color: ${BLACK_COLOR};
              border: 0px;
              box-shadow: 0 6px 20px rgba(0, 0, 0, 0.23);
            }
            a.small {
              max-width: ${SMALL_BUTTON_WIDTH};
              min-width: 20px;
              height: ${SMALL_BUTTON_HEIGHT};
              padding: 3px 24px;
              line-height: 2;
            }
            a.large {
              max-width: ${LARGE_BUTTON_WIDTH};
              max-height: ${LARGE_BUTTON_HEIGHT};
              text-align: center;
              line-height: 3;
            }
            a.pink {
              color: #ff0080;
            }

            a.pink:hover {
              box-shadow: unset;
            }

            a.grey {
              color: #999;
            }

            a.grey:hover {
              box-shadow: unset;
            }

            a.no-width-lmt {
              min-width: 0px;
            }

            a.link {
              margin: 0;
              padding: 0;
              border: 0;
              background: transparent;
              box-shadow: unset;
            }
          `}
        </style>
      </a>
    );

    if (href) {
      return (
        <Link href={href} prefetch={prefetch}>
          {button}
        </Link>
      );
    }
    return button;
  }
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  color: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  prefetch: PropTypes.bool
};

export default Button;
