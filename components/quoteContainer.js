import Quote from "./quoteItem";
import withPure from "./hoc/withPure";
import { content } from "../utils/quoteContent";

const QuoteContainer = withPure(() => (
  <div className="quote-container">
    <Quote quote={content} />
    <style jsx>
      {`
        .quote-container {
          width: 1017px;
          min-height: 256px;
          margin: 20px auto;
        }
        @media screen and (max-width: 996px) {
          .quote-container {
            width: 100vw;
            margin: 10px auto;
          }
        }
      `}
    </style>
  </div>
));

export default QuoteContainer;
