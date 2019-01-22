import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import withScroll from "../hoc/withScroll";

const ScrollPart = withScroll(({ scrollPos }) => (
  <div
    className="mock"
    scrollPos={scrollPos}
    style={{ height: "200vh", overflowX: "hidden", overflowY: "auto" }}
  />
));

describe("with Scroll returns", () => {
  it("component", () => {
    const wrapper = mount(<ScrollPart />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("return initial value", () => {
    const wrapper = mount(<ScrollPart />);
    console.log(wrapper.find(".mock").debug());
    expect(wrapper.find(".mock").props().scrollPos).toBe(0);
  });
});
