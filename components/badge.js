import PropTypes from "prop-types";
import WithPure from "../components/hoc/withPure";

const Badge = WithPure(props => (
  <div className="badge-container">
    {props.children}
    <style jsx>
      {`
        .badge-container {
          display: block;
          border-radius: 7.5px;
          background-color: #000000;
          font-size: 10px;
          color: #fff;
          text-align: center;
          padding: 0 7px;
          margin: 0 8px;
          line-height: 1.5;
          height: 15px;
        }
      `}
    </style>
  </div>
));

Badge.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

export default Badge;
