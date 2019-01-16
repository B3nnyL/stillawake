import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import ExampleIntroText from "../exampleIntroText";
import { content } from "../../utils/caseContent";

const fakeData = <h1>Hello</h1>;

describe("<ExmapleIntroText />", () => {
  it("render ExmapleIntroText", () => {
    const wrapper = shallow(<ExampleIntroText content={content} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render text", () => {
    const wrapper = shallow(<ExampleIntroText content={content} />);
    expect(wrapper.find("h2")).toBeTruthy;
  });
});
