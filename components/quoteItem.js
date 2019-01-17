import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import withPure from "./hoc/withPure";
import Logo from "./logo";

const QuoteItem = withPure(({ quote, partyTime }) => {
  const { text, author, title } = quote;
  const quoteBlock = (
    <div className="quote">
      <CSSTransition
        in={partyTime}
        timeout={300}
        classNames="message"
        unmountOnExit
      >
        <p>{text}</p>
      </CSSTransition>
      <CSSTransition
        in={partyTime}
        timeout={400}
        classNames="message"
        unmountOnExit
      >
        <div className="author">
          <Logo size={20} />
          <h4>{author}</h4>
          <span>{title}</span>
        </div>
      </CSSTransition>
      <style jsx>{`
        .quote {
          width: 900px;
          text-align: center;
          height: auto;
          position: relative;
          margin: 0 auto;
        }
        .quote p {
          font-size: 18px;
          max-width: 526px;
          margin: 0 auto;
          padding-bottom: 40px;
        }

        .quote p:before {
          content: "“";
          font-size: 108px;
          left: 120px;
          top: -40px;
          color: #efefef;
          z-index: -10;
          position: absolute;
          font-family: "Helvetica-Nuew";
          font-stretch: condensed;
        }

        .author {
          display: flex;
          flex-direction: column;
          justify-content: space-even;
        }

        h4 {
          font-size: 14px;
          font-weight: 500;
          margin: 4px auto;
        }
        .author--business {
          font-size: 14px;
          font-weight: 500;
        }

        @media screen and (max-width: 996px) {
          .quote {
            width: 90%;
            margin: 0px auto;
          }
          .quote p:before {
            content: "“";
            font-size: 90px;
            left: -10px;
            top: -50px;
            color: #efefef;
            z-index: -10;
            position: absolute;
            font-family: "Helvetica-Nuew";
            font-stretch: condensed;
          }
        }
      `}</style>
    </div>
  );
  return quoteBlock;
});

export default QuoteItem;
