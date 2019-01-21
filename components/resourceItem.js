import { CSSTransition } from "react-transition-group";

import withPure from "./hoc/withPure";
import NavLink from "./navLink";
import Logo from "./logo";

const ResourceItem = withPure(({ resource, partyTime, index }) => {
  const { text, title, href } = resource;
  const timeout = 300 + index * 50;
  const ResourceBlock = (
    <div className="resource">
      <CSSTransition
        in={partyTime}
        timeout={300}
        classNames="content"
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
          height: 180px;
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
            height: max-content;
            max-width: 300px;
            width: 70vw;
          }
        }
      `}</style>
    </div>
  );
  return ResourceBlock;
});

export default ResourceItem;
