import PropTypes from "prop-types";

import withPure from "./hoc/withPure";
import NavLink from "./navLink";

const ExampleIntroText = withPure(({ content }) => {
  const { title, description, link } = content;
  return (
    <div className="example-text__container">
      <h2 className="example-text--title">{title}</h2>
      <p className="example-text--desc">{description}</p>
      <div className="example-text--link">
        <NavLink className="no-width-lmt link" href={link.href}>
          {link.text}
        </NavLink>
      </div>
      <style jsx>
        {`
          .example-text__container {
            width: 361px;
            height: 227px;
            padding: 40px;
          }
          .example-text--title {
            font-size: 28px;
            font-weight: bold;
          }
          .example-text--desc {
            padding: 31px 0 19px 0;
          }

          .example-text--link {
            padding: 12px 0px;
          }
        `}
      </style>
    </div>
  );
});

ExampleIntroText.propTypes = {
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
