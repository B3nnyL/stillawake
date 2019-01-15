import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Input from "../input";

const fakeData = {
  width: 100,
  placeholder: "hello world"
};

describe("<Input />", () => {
  it("render Input", () => {
    const wrapper = shallow(
      <Input width={fakeData.width} placeholder={fakeData.placeholder} />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders the <Input /> properly", () => {
    const wrapper = shallow(
      <Input width={fakeData.width} placeholder={fakeData.placeholder} />
    );
    const input = wrapper.find("input");
    expect(input.props().placeholder).toBe(fakeData.placeholder);
    expect(input.props().style.width).toBe(`${fakeData.width}px`);
  });

  it("the width properly without props", () => {
    const wrapper = shallow(<Input placeholder={fakeData.placeholder} />);
    const input = wrapper.find("input");
    expect(input.props().style.width).toBe("149px");
  });
});
