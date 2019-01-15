import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import NavLink from "../navLink";

const badgeContent = <span>badge</span>;

describe("<NavLink />", () => {
  it("render NavLink", () => {
    const wrapper = mount(<NavLink />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render color", () => {
    const wrapper = mount(<NavLink className="pink" />);
    expect(wrapper.find(".pink")).toBeTruthy();
  });

  it("render size", () => {
    const wrapper = mount(<NavLink size="large" />);
    expect(wrapper.find(".large")).toBeTruthy();
  });

  it("render uppercase", () => {
    const wrapper = mount(<NavLink up />);
    const link = wrapper.find("a");
    expect(link.props().style.textTransform).toBe("uppercase");
  });

  it("append href", () => {
    const wrapper = mount(<NavLink href="https://www.zeit.co" />);
    expect(wrapper.props().href).toBe("https://www.zeit.co");
  });

  it("append prefetch", () => {
    const wrapper = mount(
      <NavLink prefetch={true} href="https://www.zeit.co" />
    );
    const link = wrapper.find("a");
    expect(link.props().prefetch).toBeTruthy();
  });

  it("append badge", () => {
    const wrapper = mount(<NavLink badge={badgeContent} />);
    expect(wrapper.find("badge")).toBeTruthy();
  });

  it("show child node", () => {
    const wrapper = mount(
      <NavLink>
        <h1>2333</h1>
      </NavLink>
    );
    expect(wrapper.find("h1")).toBeTruthy();
  });
});
