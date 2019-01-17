import { CSSTransition } from "react-transition-group";

import withPure from "./hoc/withPure";
import NavLink from "./navLink";
import Logo from "./logo";

const ResourceItem = withPure(({ resource, partyTime }) => {
  const { text, title, href } = resource;
  const ResourceBlock = (
    <div className="resource">
      <CSSTransition
        in={partyTime}
        timeout={300}
        classNames="message"
        unmountOnExit
      >
        <div className="resource__container">
          <div className="resource__content">
            <Logo />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>

          <div className="resource__link">
            <NavLink href={href}>Read More</NavLink>
          </div>
        </div>
      </CSSTransition>

      <style jsx>{`
        .resource__container {
          width: 262px;
          height: max-content;
          border-radius: 5px;
          padding: 33px 24px;
          box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
        }
        .resource p {
          font-size: 14px;
          max-width: 526px;
          margin: 0 auto;
          padding-bottom: 20px;
        }

        h3 {
          font-size: 18px;
          font-weight: 500;
          margin: 15px 0 10px 0;
        }

        @media screen and (max-width: 996px) {
          .resource__container {
            margin: 25px auto;
          }
        }
      `}</style>
    </div>
  );
  return ResourceBlock;
});

export default ResourceItem;
