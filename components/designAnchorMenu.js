import withPure from "./hoc/withPure";
import NavLink from "../components/navLink";

const DesignAnchorMenu = withPure(() => (
  <div>
    <ul>
      <li>
        <NavLink href="#workflow">workflow</NavLink>
      </li>
      <li>
        <NavLink href="#test">test</NavLink>
      </li>
      <li>
        <NavLink href="#documentation">documentation</NavLink>
      </li>
      <li>
        <NavLink href="#collaboration">collaboration</NavLink>
      </li>
      <li>
        <NavLink href="#resources">resources</NavLink>
      </li>
    </ul>
    <style jsx>
      {`
        ul {
          display: flex;
          align-self: end;
        }
        li {
          display: flex;
          padding: 6px 8px;
          position: relative;
        }
      `}
    </style>
  </div>
));

export default DesignAnchorMenu;
