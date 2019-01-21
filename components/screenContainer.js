import { CSSTransition } from "react-transition-group";
import withPure from "./hoc/withPure";

const ScreenContainer = withPure(
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
            style={{ height: height, background: background, zIndex: zIndex }}
          >
            {children}
          </div>
        </CSSTransition>
      </div>
    );
  }
);

export default ScreenContainer;
