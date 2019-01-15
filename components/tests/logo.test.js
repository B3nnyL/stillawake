import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Logo from "../logo";

describe("<Logo />", () => {
  it("render Logo", () => {
    const wrapper = mount(<Logo />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render color", () => {
    let wrapper = mount(<Logo white />);
    expect(wrapper.find(".white-logo")).toBeTruthy();
    wrapper = mount(<Logo />);
    expect(wrapper.find(".black-logo")).toBeTruthy();
  });

  it("render size", () => {
    let wrapper = mount(<Logo />);
    expect(wrapper.find("svg").props().height).toBe("20px");
    wrapper = mount(<Logo size={2} />);
    expect(wrapper.find("svg").props().height).toBe("2px");
  });
});
