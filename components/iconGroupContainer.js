import { CSSTransition } from "react-transition-group";
import withPure from "./hoc/withPure";

const IconGroupContainer = withPure(
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
            className="icongroup-container"
            style={{ height: height, background: background, zIndex: zIndex }}
          >
            {children}
          </div>
        </CSSTransition>
        <style jsx>
          {`
            .icongroup-container {
              position: relative;
              top: -60px;
              left: 320px;
              height: min-content;
            }
            @media screen and (max-width: 996px) {
              .icongroup-container {
                position: relative;
                top: -60px;
                left: 65vw;
              }
            }
          `}
        </style>
      </div>
    );
  }
);

export default IconGroupContainer;
