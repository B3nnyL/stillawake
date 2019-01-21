import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import withPure from "./hoc/withPure";
import NavLink from "./navLink";

const ExampleIntroText = withPure(({ content, partyTime }) => {
  const { title, description, link } = content;
  return (
    <div className="example-text__container">
      <CSSTransition
        in={partyTime}
        timeout={300}
        classNames="content"
        unmountOnExit
      >
        <h2 className="example-text--title">{title}</h2>
      </CSSTransition>
      <CSSTransition
        in={partyTime}
        timeout={400}
        classNames="content"
        unmountOnExit
      >
        <p className="example-text--desc">{description}</p>
      </CSSTransition>
      <CSSTransition
        in={partyTime}
        timeout={500}
        classNames="content"
        unmountOnExit
      >
        <div className="link-group">
          <div className="example-text--link">
            <NavLink className="no-width-lmt link blue" href={link.href}>
              Read case study
            </NavLink>
          </div>
          <div className="example-text--link">
            <NavLink className="no-width-lmt link" href={link.href}>
              Read Docs
            </NavLink>
          </div>
        </div>
      </CSSTransition>
      <style jsx>
        {`
          .example-text__container {
            width: 361px;
            height: 227px;
            padding: 40px;
          }
          .example-text--title {
            font-size: 28px;
            font-weight: 500;
            opacity: 1;
            text-transform: capitalize;
          }
          .example-text--desc {
            padding: 15px 0 19px 0;
          }
          .link-group {
            display: flex;
          }
          .example-text--link {
            padding: 12px 12px 12px 0px;
          }

          @media screen and (max-width: 699px) {
            .example-text__container {
              width: 90vw;
              height: 227px;
              padding: 40px 0px;
            }
          }
        `}
      </style>
    </div>
  );
});

ExampleIntroText.propTypes = {
  partyTime: PropTypes.bool,
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string
    })
  })
};

export default ExampleIntroText;
