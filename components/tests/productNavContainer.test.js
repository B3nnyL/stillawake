import { shallow, mount } from "enzyme";
import toJSON, { toJson } from "enzyme-to-json";
import ProductNavContainer from "../productNavContainer";
import { PRODUCT_CONTENT } from "../../utils/navContent";
import ProductItem from "../productItem";
import MenuFooter from "../menuFooter";

describe("<ProductNavContainer />", () => {
  it("render ProductNavContainer", () => {
    const wrapper = mount(
      <ProductNavContainer
        ProductItemComp={ProductItem}
        productContents={PRODUCT_CONTENT.links}
        FooterComp={MenuFooter}
        footerContent={PRODUCT_CONTENT.footerContent}
        visible
      />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render items and footer", () => {
    const wrapper = mount(
      <ProductNavContainer
        ProductItemComp={ProductItem}
        productContents={PRODUCT_CONTENT.links}
        FooterComp={MenuFooter}
        footerContent={PRODUCT_CONTENT.footerContent}
        visible
        top="20px"
        left="10px"
      />
    );
    expect(toJSON(wrapper.find(".item-wrapper"))).toBeTruthy();
    expect(toJSON(wrapper.find(".footer-container"))).toBeTruthy();
  });
});

it("render invisible", () => {
  const wrapper = mount(
    <ProductNavContainer
      ProductItemComp={ProductItem}
      productContents={PRODUCT_CONTENT.links}
      FooterComp={MenuFooter}
      footerContent={PRODUCT_CONTENT.footerContent}
      visible={false}
      top="20px"
      left="10px"
    />
  );
  const container = wrapper.find(".productMenu__container");
  expect(container.props().style.opacity).toBe("0");
  expect(container.props().style.zIndex).toBe("200");
  expect(container.props().style.left).toBe("-9999px");
});

it("render visible", () => {
  const wrapper = mount(
    <ProductNavContainer
      ProductItemComp={ProductItem}
      productContents={PRODUCT_CONTENT.links}
      FooterComp={MenuFooter}
      footerContent={PRODUCT_CONTENT.footerContent}
      visible
      top="20px"
      left="10px"
    />
  );
  const container = wrapper.find(".productMenu__container");
  expect(container.props().style.opacity).toBe("1");
  expect(container.props().style.zIndex).toBe("400");
  expect(container.props().style.left).toBe("10px");
});
