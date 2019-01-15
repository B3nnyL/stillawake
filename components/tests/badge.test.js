import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Badge from "../badge";

const fakeData = <h1>Hello</h1>;

describe("<Badge />", () => {
  it("render Badge", () => {
    const wrapper = shallow(<Badge>{fakeData}</Badge>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render text", () => {
    const wrapper = shallow(<Badge>{fakeData}</Badge>);
    expect(wrapper.find("h1")).toBeTruthy;
  });
});
