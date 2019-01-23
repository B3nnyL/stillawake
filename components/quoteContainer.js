import Quote from "./quoteItem";
import withPure from "./hoc/withPure";
import { content } from "../utils/quoteContent";

import React, { PureComponent, Fragment, createRef } from "react";
import withScroll from "./hoc/withScroll";

const QuoteContainer = withScroll(({ scrollPos, identity }) => (
  <section id={identity}>
    <QuoteContainerRender partyTime={scrollPos > 650 ? false : true} />
  </section>
));

const QuoteContainerRender = withPure(({ partyTime }) => (
  <div className="quote-container">
    <Quote quote={content} partyTime={partyTime} />
    <style jsx>
      {`
        .quote-container {
          max-width: 1017px;
          min-height: 250px;
          margin: 20px auto;
        }
        @media screen and (max-width: 996px) {
          .quote-container {
            width: 100vw;
            margin: 40px auto;
            min-height: unset;
          }
        }
      `}
    </style>
  </div>
));

export default QuoteContainer;
