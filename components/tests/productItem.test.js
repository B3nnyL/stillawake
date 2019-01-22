import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import ProductItem from "../productItem";
import { PRODUCT_CONTENT } from "../../utils/navContent";

describe("<ProductItem />", () => {
  it("renders content", () => {
    const wrapper = mount(<ProductItem content={PRODUCT_CONTENT.links[0]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders logo", () => {
    const wrapper = mount(<ProductItem content={PRODUCT_CONTENT.links[0]} />);
    expect(wrapper.find("svg").props().height).toBe("15px");
  });

  it("renders content", () => {
    const wrapper = mount(<ProductItem content={PRODUCT_CONTENT.links[0]} />);
    expect(wrapper.find("h3").text()).toBe(PRODUCT_CONTENT.links[0].label);
    expect(wrapper.find("p").text()).toBe(PRODUCT_CONTENT.links[0].desc);
    expect(wrapper.find("a").props().href).toBe(PRODUCT_CONTENT.links[0].href);
  });
});
