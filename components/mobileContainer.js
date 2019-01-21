import { CSSTransition } from "react-transition-group";
import withPure from "./hoc/withPure";

const MobileContainer = withPure(
  ({ children, height, horizontal, vertical, partyTime }) => {
    return (
      <div>
        <CSSTransition
          in={partyTime}
          classNames="content"
          timeout={500}
          unmountOnExit
        >
          <div className="mobile-container">
            <div className="mobile-container__body">{children}</div>
          </div>
        </CSSTransition>
        <style jsx>{`
          .mobile-container {
            width: 150px;
            height: auto;
            border-radius: 3px;
            box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.11);
            background-color: #ffffff;
            position: absolute;
            top: 86px;
            right: -20px;
          }
          .mobile-container__body {
            width: 100%;
            height: ${height};
            position: relative;
            display: grid;
            justify-content: ${horizontal};
            align-items: ${vertical};
          }
          @media screen and (max-width: 699px) {
            .mobile-container {
              top: 86px;
              right: 50px;
            }
          }
        `}</style>
      </div>
    );
  }
);

export default MobileContainer;
