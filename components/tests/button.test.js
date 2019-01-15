import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Button from "../button";

describe("<Button />", () => {
  it("render Button", () => {
    const wrapper = mount(<Button />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render color", () => {
    const wrapper = mount(<Button className="pink" />);
    expect(wrapper.find(".pink")).toBeTruthy();
  });

  it("render size", () => {
    const wrapper = mount(<Button size="large" />);
    expect(wrapper.find(".large")).toBeTruthy();
  });

  it("append href", () => {
    const wrapper = mount(<Button href="https://www.zeit.co" />);
    expect(wrapper.props().href).toBe("https://www.zeit.co");
  });

  it("append prefetch", () => {
    const wrapper = mount(<Button prefetch />);
    expect(wrapper.props().prefetch).toBeTruthy();
  });

  it("show child node", () => {
    const wrapper = mount(
      <Button>
        <h1>2333</h1>
      </Button>
    );
    expect(wrapper.find("h1")).toBeTruthy();
  });
});
