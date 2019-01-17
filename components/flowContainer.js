import { CSSTransition } from "react-transition-group";
import withPure from "./hoc/withPure";

const FlowContainer = withPure(
  ({ children, height, background, zIndex, partyTime }) => {
    return (
      <div>
        <CSSTransition
          in={partyTime}
          classNames="message"
          timeout={300}
          unmountOnExit
        >
          <div
            className="flow-container"
            style={{
              height: height,
              background: background,
              zIndex: zIndex
            }}
          >
            {children}
          </div>
        </CSSTransition>
        <style jsx>
          {`
            .flow-container {
              margin: 20px;
            }
          `}
        </style>
      </div>
    );
  }
);

export default FlowContainer;
