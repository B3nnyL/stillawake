import { CSSTransition } from "react-transition-group";
import withPure from "./hoc/withPure";

const FlowContainer = withPure(
  ({ children, height, background, zIndex, partyTime }) => {
    return (
      <div>
        <CSSTransition
          in={partyTime}
          classNames="content"
          timeout={300}
          unmountOnExit
        >
          <div
            className="flow-container"
            style={{ height: height, background: background, zIndex: zIndex }}
          >
            {children}
          </div>
        </CSSTransition>
        <style jsx>
          {`
            .flow-container {
              margin: 20px;
            }
            @media screen and (max-width: 699px) {
              .flow-container {
                margin: 20px auto;
              }
            }
          `}
        </style>
      </div>
    );
  }
);

export default FlowContainer;
