import PropTypes from "prop-types";
import classNames from "classnames";

import React, { PureComponent, createRef } from "react";

export default class ExampleContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = createRef();
    this.state = { posY: 0 };
  }
  componentDidMount() {
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
    const {
      identity,
      CompLeft,
      CompRight,
      contentLeft,
      contentRight,
      order
    } = this.props;
    return (
      <section id={identity} ref={this.myRef} onScroll={this.handleScroll}>
        <ExampleContainerRender
          partyTime={this.state.posY > 650 ? false : true}
          CompLeft={CompLeft}
          CompRight={CompRight}
          contentLeft={contentLeft}
          contentRight={contentRight}
          order={order}
        />
      </section>
    );
  }
}

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
          width: 1017px;
          max-height: 400px;
          margin: 20px auto;
          padding: 40px 30px;
          display: flex;
          justify-content: space-between;
          overflow-y: scroll;
          overflow-x: none;
        }
        .example__container--left {
          width: 450px;
        }

        @media screen and (max-width: 699px) {
          .example__container {
            width: 90vw;
            margin: 20px auto;
            max-height: 1000px;
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
