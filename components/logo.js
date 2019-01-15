import PropTypes from "prop-types";
import withPure from "./hoc/withPure";

const Logo = withPure(({ size, white }) => (
  <svg
    height={size ? `${size}px` : "20px"}
    viewBox="0 0 110 100"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {white ? (
      <g
        className="white-logo"
        id="Page-1"
        stroke="none"
        storke="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Black-Now-Logo"
          transform="translate(-295.000000, -150.000000)"
          fill="#000000"
          fillRule="nonzero"
        >
          <g
            id="now-black-logotype"
            transform="translate(295.000000, 150.000000)"
          >
            <path
              d="M55,0.344827586 L0.34375,99.3965517 L109.570312,99.3965517 L55,0.344827586 Z M50.359375,20.3448276 L90.1484375,93.7068966 L9.96875,93.7068966 L50.359375,20.3448276 Z"
              id="Shape"
            />
          </g>
        </g>
      </g>
    ) : (
      <g
        className="black-logo"
        id="Page-1"
        stroke="none"
        storke="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Black-Triangle"
          transform="translate(-293.000000, -150.000000)"
          fill="#000"
        >
          <polygon id="Logotype---Black" points="350 150 407 250 293 250" />
        </g>
      </g>
    )}
  </svg>
));

Logo.propTypes = {
  size: PropTypes.number,
  white: PropTypes.bool
};

export default Logo;
