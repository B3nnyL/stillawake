import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import MenuFooter from "../menuFooter";
import { PRODUCT_CONTENT } from "../../utils/navContent";

describe("<MenuFooter />", () => {
  it("render MenuFooter", () => {
    const wrapper = mount(
      <MenuFooter content={PRODUCT_CONTENT.footerContent} />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render badge and link", () => {
    let wrapper = mount(<MenuFooter content={PRODUCT_CONTENT.footerContent} />);
    expect(wrapper.find("badge")).toBeTruthy();
    expect(wrapper.find("a").props().href).toBe(
      PRODUCT_CONTENT.footerContent.href
    );
  });
});
