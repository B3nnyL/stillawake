import { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";

import { BLACK_COLOR, WHITE_COLOR } from "./utils/tokens";

class TopBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }
  onToggleClick = e => {
    this.setState({ visible: false });
  };
  render() {
    return (
      <Fragment>
        <div
          className="bar"
          style={{ opacity: this.state.visible ? "1" : "0" }}
        >
          <div className="bar__content">{this.props.children}</div>
          <div className="bar__toggle cross" onClick={this.onToggleClick}>
            <div className="cross--left" />
            <div className="cross--right" />
          </div>
        </div>
        <style jsx>
          {`
            .bar {
              display: block;
              width: 100vw;
              height: 20px;
              padding: 5px;
              background: ${BLACK_COLOR};
              text-align: center;
              font-size: 14px;
              color: ${WHITE_COLOR};
              overflow-x: hidden;
              opacity: 1;
              transition: opacity 200ms ease-in-out;
              z-index: 2000;
              position: relative;
              top: 0;
            }

            .cross {
              position: absolute;
              top: 13px;
              right: 20px;
              width: 15px;
              height: 15px;
              z-index: 1500;
            }

            .cross--left {
              border: 1px #fff solid;
              transform: rotate(45deg);
              top: -0.5px;
              position: absolute;
              width: 12px;
            }
            .cross--right {
              border: 1px #fff solid;
              width: 12px;
              transform: rotate(-45deg);
            }

            @media screen and (max-width: 699px) {
              .bar {
                display: block;
                width: 100vw;
                padding: 5px;
                background: ${BLACK_COLOR};
                text-align: center;
                font-size: 14px;
                color: ${WHITE_COLOR};
                overflow-x: hidden;
                opacity: 1;
                transition: opacity 200ms ease-in-out;
                z-index: 2000;
                height: max-content;
              }
              .bar__content {
                max-width: 90vw;
              }
            }
          `}
        </style>
      </Fragment>
    );
  }
}

TopBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default TopBar;
