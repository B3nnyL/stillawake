import Quote from "./quoteItem";
import withPure from "./hoc/withPure";
import { content } from "../utils/quoteContent";

import React, { PureComponent, Fragment, createRef } from "react";

class QuoteContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = createRef();
    this.state = { posY: 0 };
  }
  componentDidMount() {
    // window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scroll = this.myRef.current.getBoundingClientRect().y;
    this.setState({ posY: scroll });
  };

  render() {
    const { identity } = this.props;
    return (
      <section id={identity} ref={this.myRef} onScroll={this.handleScroll}>
        <QuoteContainerRender
          partyTime={this.state.posY > 650 ? false : true}
        />
      </section>
    );
  }
}
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
            margin: 10px auto;
            min-height: unset;
          }
        }
      `}
    </style>
  </div>
));

export default QuoteContainer;
