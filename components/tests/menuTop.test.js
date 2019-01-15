import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import MenuTop from "../menuTop";
import { USE_CASE_CONTENT } from "../../utils/navContent";

describe("<MenuTop />", () => {
  it("render MenuTop", () => {
    const wrapper = mount(
      <MenuTop
        title={USE_CASE_CONTENT.title}
        content={USE_CASE_CONTENT.subMenuContent[0]}
        menuPos="left"
      />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render label and link", () => {
    const wrapper = mount(
      <MenuTop
        title={USE_CASE_CONTENT.title}
        content={USE_CASE_CONTENT.subMenuContent[0]}
        menuPos="left"
      />
    );
    expect(toJSON(wrapper.find("a"))).toBeTruthy();
  });

  it("render with pos", () => {
    const wrapper = mount(
      <MenuTop
        title={USE_CASE_CONTENT.title}
        content={USE_CASE_CONTENT.subMenuContent[0]}
        menuPos="left"
      />
    );
    expect(toJSON(wrapper.find(".left"))).toBeTruthy();
  });
});
