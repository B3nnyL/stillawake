import { Fragment } from "react";
import { CSSTransition } from "react-transition-group";

import withPure from "./hoc/withPure";

const DataContainer = withPure(({ data, desc, partyTime }) => (
  <div className="data-container">
    <CSSTransition
      in={partyTime}
      classNames="content"
      timeout={300}
      unmountOnExit
    >
      <Fragment>
        <h1 className="data-container--data">{"90%" || data}</h1>
        <p className="data-container--desc">
          {"Less time needed to test and iterate" || desc}
        </p>
      </Fragment>
    </CSSTransition>
    <style jsx>
      {`
        .data-container {
          width: 377px;
          height: auto;
        }
        .data-container--data {
          font-size: 48px;
          text-align: left;
          width: 146px;
          border-top: 1px dashed #979797;
        }
        .data-container--desc {
          font-weight: 600;
          text-align: left;
        }

        @media screen and (max-width: 996px) {
          .data-container {
            width: auto;
          }
          .data-container--data {
            width: auto;
            font-size: 30px;
          }
          .data-container--desc {
            font-weight: 600;
            text-align: left;
            font-size: 12px;
          }
        }
      `}
    </style>
  </div>
));

export default DataContainer;
