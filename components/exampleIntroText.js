import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { Fragment } from "react";

import withPure from "./hoc/withPure";
import NavLink from "./navLink";

const ExampleIntroText = withPure(({ content, partyTime }) => {
  const { subtitle, title, description, blog, resource, reading } = content;
  return (
    <div className="example-text__container">
      <CSSTransition
        in={partyTime}
        timeout={300}
        classNames="content"
        unmountOnExit
      >
        <div>
          <h4 className="example-text--subtitle">{subtitle}</h4>
          <h2 className="example-text--title">{title}</h2>
        </div>
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
          {blog ? (
            <div className="example-text--link">
              <NavLink className="no-width-lmt link blue" href={blog.href}>
                {blog.text}
              </NavLink>
            </div>
          ) : (
            <Fragment />
          )}
          {resource ? (
            <div className="example-text--link">
              <NavLink className="no-width-lmt link" href={resource.href}>
                {resource.text}
              </NavLink>
            </div>
          ) : (
            <Fragment />
          )}
          {reading ? (
            <div className="example-text--link">
              <NavLink className="no-width-lmt link " href={reading.href}>
                {reading.text}
              </NavLink>
            </div>
          ) : (
            <Fragment />
          )}
        </div>
      </CSSTransition>
      <style jsx>
        {`
          .example-text__container {
            max-width: 440px;
            height: 227px;
            padding: 20px 0px 20px 40px;
          }
          .example-text--title {
            text-transform: capitalize;
          }
          .example-text--subtitle {
            font-size: 12px;
            color: #444;
            letter-spacing: 0.8px;
          }
          .example-text--desc {
            padding: 15px 0 19px 0;
            line-height: 24px;
          }
          .link-group {
            display: flex;
          }
          .example-text--link {
            padding: 12px 12px 12px 0px;
          }

          @media screen and (max-width: 996px) {
            .example-text__container {
              max-width: 400px;
              margin: auto;
              width: 90vw;
              height: max-content;
              max-height: 1000px;
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
