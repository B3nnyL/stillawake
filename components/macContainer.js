import { CSSTransition } from "react-transition-group";
import withPure from "./hoc/withPure";

const MacContainer = withPure(
  ({ children, height, horizontal, vertical, partyTime }) => {
    return (
      <div>
        <CSSTransition
          in={partyTime}
          classNames="message"
          timeout={300}
          unmountOnExit
        >
          <div className="mac-container">
            <div className="mac-container__header">
              <div className="btn close" />
              <div className="btn minimise" />
              <div className="btn maximise" />
            </div>
            <div className="mac-container__body">{children}</div>
          </div>
        </CSSTransition>
        <style jsx>{`
          .mac-container {
            width: 450px;
            height: auto;
            border-radius: 3px;
            box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.11);
            background-color: #ffffff;
          }
          .mac-container__header {
            width: 100%;
            height: 32px;
            border-radius: 3px;
            background-color: #ffffff;
            display: flex;
          }
          .mac-container__body {
            width: 100%;
            height: ${height};
            position: relative;
            display: grid;
            justify-content: ${horizontal};
            align-items: ${vertical};
          }
          .btn {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 11px;
          }

          .close {
            background-color: #ff5f56;
          }
          .minimise {
            background-color: #ffbd2e;
          }
          .maximise {
            background-color: #27c93f;
          }

          @media screen and (max-width: 699px) {
            .mac-container {
              width: 80vw;
              height: max-content;
              margin: 0 auto;
              border-radius: 3px;
              box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.11);
              background-color: #ffffff;
              margin-bottom: 20px;
            }
          }
        `}</style>
      </div>
    );
  }
);

export default MacContainer;
