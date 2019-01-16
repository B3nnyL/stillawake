import PropTypes from "prop-types";
import classNames from "classnames";

import withPure from "./hoc/withPure";

const ExampleContainer = withPure(
  ({ CompLeft, CompRight, contentLeft, contentRight }) => (
    <div className={classNames("example__container")}>
      <div className="example__container--left">
        <CompLeft content={contentLeft} />
      </div>
      <div className="example__container--right">
        <CompRight content={contentRight} />
      </div>
      <style jsx>
        {`
          .example__container {
            width: 1017px;
            max-height: 324px;
            margin: 20px auto;
            padding: 40px 30px;
            display: flex;
            justify-content: space-between;
          }
          .example__container--left {
            width: 450px;
          }
        `}
      </style>
    </div>
  )
);

export default ExampleContainer;
