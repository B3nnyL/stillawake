import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import PageNav from "../pageNav";

const fakeData = "Hello";

describe("<PageNav />", () => {
  it("render PageNav", () => {
    const wrapper = mount(<PageNav />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render intial props", () => {
    const wrapper = mount(<PageNav />);
    expect(wrapper.find("h2").text()).toBe("page");
  });

  it("render title", () => {
    const wrapper = mount(<PageNav title="for designer" />);
    expect(wrapper.find("h2").text()).toBe("for designer");
  });
});
