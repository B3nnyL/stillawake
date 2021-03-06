import classNames from "classnames";
import DataContainer from "./dataContainer";
import TestimonialContainer from "./testimonialContainer";

import React, { PureComponent, createRef } from "react";
import withScroll from "./hoc/withScroll";

const DataTestimonialContainer = withScroll(
  ({ scrollPos, contentLeft, contentRight, order }) => (
    <section id="testimonial">
      <DataTestimonialContainerRender
        partyTime={scrollPos > 650 ? false : true}
        CompLeft={DataContainer}
        CompRight={TestimonialContainer}
        contentLeft={contentLeft}
        contentRight={contentRight}
        order={order}
      />
    </section>
  )
);

const DataTestimonialContainerRender = ({
  partyTime,
  CompLeft,
  CompRight,
  contentLeft,
  contentRight,
  order
}) => (
  <div className={classNames("data-testimonial__container")}>
    <div className="data-testimonial__container--left">
      <CompLeft content={contentLeft} partyTime={partyTime} />
    </div>
    <div
      className={classNames("data-testimonial__container--right", {
        "re-order": order
      })}
    >
      <CompRight content={contentRight} partyTime={partyTime} />
    </div>
    <style jsx>
      {`
        .data-testimonial__container {
          width: 1017px;
          max-height: 400px;
          margin: 40px auto;
          padding: 40px 30px;
          display: flex;
          justify-content: center;
          overflow-y: scroll;
          overflow-x: none;
        }
        .data-testimonial__container--left {
          width: 30vw;
        }
        .data-testimonial__container--right {
          margin: 0px 50px;
        }

        @media screen and (max-width: 996px) {
          .data-testimonial__container {
            width: 90vw;
            margin: 20px auto;
            max-height: 1000px;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            overflow-y: scroll;
            overflow-x: none;
          }
          .data-testimonial__container--right {
            margin: 0px 0px 0px 40px;
          }
        }
      `}
    </style>
  </div>
);

export default DataTestimonialContainer;
