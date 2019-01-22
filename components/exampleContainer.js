import classNames from "classnames";

import React from "react";
import withScroll from "./hoc/withScroll";

const ExampleContainer = withScroll(
  ({
    scrollPos,
    identity,
    CompLeft,
    CompRight,
    contentLeft,
    contentRight,
    order
  }) => (
    <section id={identity}>
      <ExampleContainerRender
        partyTime={scrollPos > 650 ? false : true}
        CompLeft={CompLeft}
        CompRight={CompRight}
        contentLeft={contentLeft}
        contentRight={contentRight}
        order={order}
      />
    </section>
  )
);

const ExampleContainerRender = ({
  partyTime,
  CompLeft,
  CompRight,
  contentLeft,
  contentRight,
  order
}) => (
  <div className={classNames("example__container")}>
    <div className="example__container--left">
      <CompLeft content={contentLeft} partyTime={partyTime} />
    </div>
    <div
      className={classNames("example__container--right", { "re-order": order })}
    >
      <CompRight content={contentRight} partyTime={partyTime} />
    </div>
    <style jsx>
      {`
        .example__container {
          max-width: 1017px;
          max-height: 400px;
          margin: 0px auto;
          padding: 80px 0px;
          display: flex;
          justify-content: center;
          overflow-y: scroll;
          overflow-x: none;
        }

        .example__container--right {
          margin-left: 50px;
        }

        @media screen and (max-width: 996px) {
          .example__container {
            width: 90vw;
            margin: 20px auto;
            max-height: 1000px;
            padding: 20px 0px;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow-y: scroll;
            overflow-x: none;
          }

          .example__container--left,
          .example__container--right {
            margin: 0 auto;
            width: 90vw;
          }

          .re-order {
            order: -1;
          }
        }
      `}
    </style>
  </div>
);

export default ExampleContainer;
