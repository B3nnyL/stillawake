import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Topbar from "../topbar";

const fakeData = <h1>Hello</h1>;

describe("<Topbar />", () => {
  it("render Topbar", () => {
    const wrapper = shallow(<Topbar>{fakeData}</Topbar>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render text", () => {
    const wrapper = shallow(<Topbar>{fakeData}</Topbar>);
    expect(wrapper.find("h1")).toBeTruthy;
  });
});
