import { Fragment } from "react";
import PropTypes from "prop-types";
import {
  BLACK_COLOR,
  WHITE_COLOR,
  INPUT_SHADOW,
  BLACK_COLOR_A2,
  WHITE_COLOR_A1
} from "./utils/tokens";

const Input = ({ placeholder = "type something", width = 149 }) => {
  const input = (
    <Fragment>
      <input
        type="text"
        placeholder={placeholder}
        style={{ width: `${width}px` }}
      />
      <style jsx>
        {`
          input[type="text"] {
            min-width: 149px;
            border: 1px ${WHITE_COLOR_A1} solid;
            padding: 5px 10px;
            border-radius: 5px;
            box-shadow: ${INPUT_SHADOW};
            background-color: ${WHITE_COLOR};
          }
          ::placeholder {
            font-size: 12px;
            color: ${BLACK_COLOR_A2};
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-transform: uppercase;
          }
          input[type="text"]:focus {
            border: 1px ${BLACK_COLOR} solid;
          }
        `}
      </style>
    </Fragment>
  );
  return input;
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  width: PropTypes.number
};

export default Input;
