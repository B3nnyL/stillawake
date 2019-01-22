import { CSSTransition } from "react-transition-group";
import React, { PureComponent, createRef } from "react";

import ResourceItem from "./resourceItem";
import withPure from "./hoc/withPure";
import RESOURCE_CONTENT from "../utils/resourceContent";

class ResourceContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = createRef();
    this.state = { posY: 0 };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
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
      <section id="resources" ref={this.myRef} onScroll={this.handleScroll}>
        <CSSTransition
          in={this.state.posY > 500 ? false : true}
          timeout={300}
          classNames="content"
          unmountOnExit
        >
          <h2>Resource and Integration</h2>
        </CSSTransition>
        <ResourceContainerRender
          partyTime={this.state.posY > 500 ? false : true}
        />
        <style jsx>
          {`
            h2 {
              text-align: center;
              font-size: 32px;
              margin: 40px auto;
            }
          `}
        </style>
      </section>
    );
  }
}
const ResourceContainerRender = withPure(({ partyTime }) => (
  <div className="resource-container">
    {RESOURCE_CONTENT.map((content, i) => (
      <ResourceItem
        key={i}
        resource={content}
        partyTime={partyTime}
        index={i}
      />
    ))}

    <style jsx>
      {`
        .resource-container {
          max-width: 1017px;
          min-height: 256px;
          margin: 20px auto;
          display: flex;
          justify-content: space-between;
        }

        @media screen and (max-width: 996px) {
          .resource-container {
            width: 400px;
            flex-direction: column;
            margin: 30px auto;
            min-height: unset;
          }
        }
      `}
    </style>
  </div>
));

export default ResourceContainer;
