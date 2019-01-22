import { CSSTransition } from "react-transition-group";
import { Fragment } from "react";

import withPure from "./hoc/withPure";
import NavLink from "./navLink";

import { BRANDS } from "../utils/brands";

const TestimonialContainer = withPure(({ brand, desc, href, partyTime }) => (
  <div className="testimonial-container">
    <CSSTransition
      in={partyTime}
      classNames="content"
      timeout={300}
      unmountOnExit
    >
      <Fragment>
        <div className="testimonial--brand">{BRANDS[0]}</div>
        <p className="testimonial--desc">
          {"Auth0 build and continuously improve \
design system with helps from now" ||
            desc}
        </p>
        <NavLink href="#" className="blue link">
          {" "}
          Read story
        </NavLink>
      </Fragment>
    </CSSTransition>
    <style jsx>
      {`
        .testimonial-container {
          width: 377px;
          height: auto;
        }
        .testimonial--brand {
          max-height: 40px;
          margin-bottom: 40px;
        }
        .testimonial--desc {
          font-size: 18px;
          line-height: 1.75;
          padding-bottom: 18px;
        }

        @media screen and (max-width: 699px) {
          .testimonial-container {
            width: auto;
          }
          .testimonial--brand {
            max-height: 40px;
            margin-bottom: 20px;
          }
        }
      `}
    </style>
  </div>
));

export default TestimonialContainer;
