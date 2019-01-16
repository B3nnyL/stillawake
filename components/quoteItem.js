import PropTypes from "prop-types";

import withPure from "./hoc/withPure";

const QuoteItem = withPure(({ quote }) => {
  const { text, author, title } = quote;
  const quoteBlock = (
    <div className="quote">
      <p>{text}</p>
      <div className="author">
        <h4>{author}</h4>
        <span>{title}</span>
      </div>
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
          margin-bottom: 4px;
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
