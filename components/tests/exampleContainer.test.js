import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import ExampleContainer from "../exampleContainer";
import ExampleIntroText from "../exampleIntroText";
import { content } from "../../utils/caseContent";

const fakeData = <h1>Hello</h1>;

describe("<ExampleContainer />", () => {
  it("render example container", () => {
    const wrapper = mount(
      <ExampleContainer
        CompLeft={ExampleIntroText}
        CompRight={ExampleIntroText}
        contentLeft={content}
        contentRight={content}
      />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render text", () => {
    const wrapper = mount(
      <ExampleContainer
        CompLeft={ExampleIntroText}
        CompRight={ExampleIntroText}
        contentLeft={content}
        contentRight={content}
      />
    );
    expect(wrapper.find("h2")).toBeTruthy;
    expect(wrapper.find("p")).toBeTruthy;
    expect(wrapper.find("a")).toBeTruthy;
  });
});
