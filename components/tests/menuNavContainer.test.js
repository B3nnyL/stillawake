import { shallow, mount } from "enzyme";
import toJSON, { toJson } from "enzyme-to-json";
import MenuNavContainer from "../MenuNavContainer";
import { USE_CASE_CONTENT } from "../../utils/navContent";
import MenuTop from "../menuTop";
import MenuFooter from "../menuFooter";

describe("<MenuNavContainer />", () => {
  it("render MenuNavContainer", () => {
    const wrapper = mount(
      <MenuNavContainer
        CompLeft={MenuTop}
        contentLeft={USE_CASE_CONTENT.subMenuContent[0]}
        CompRight={MenuTop}
        contentRight={USE_CASE_CONTENT.subMenuContent[1]}
        FooterComp={MenuFooter}
        footerContent={USE_CASE_CONTENT.footerContent}
        visible
        top="20px"
        left="0px"
      />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render items and footer", () => {
    const wrapper = mount(
      <MenuNavContainer
        CompLeft={MenuTop}
        contentLeft={USE_CASE_CONTENT.subMenuContent[0]}
        CompRight={MenuTop}
        contentRight={USE_CASE_CONTENT.subMenuContent[1]}
        FooterComp={MenuFooter}
        footerContent={USE_CASE_CONTENT.footerContent}
        visible
        top="20px"
        left="0px"
      />
    );
    expect(toJSON(wrapper.find(".left"))).toBeTruthy();
    expect(toJSON(wrapper.find(".footer-container"))).toBeTruthy();
  });
});

it("render invisible", () => {
  const wrapper = mount(
    <MenuNavContainer
      CompLeft={MenuTop}
      contentLeft={USE_CASE_CONTENT.subMenuContent[0]}
      CompRight={MenuTop}
      contentRight={USE_CASE_CONTENT.subMenuContent[1]}
      FooterComp={MenuFooter}
      footerContent={USE_CASE_CONTENT.footerContent}
      visible={false}
      top="20px"
      left="0px"
    />
  );
  const container = wrapper.find(".menu__container");
  expect(container.props().style.opacity).toBe("0");
  expect(container.props().style.zIndex).toBe("200");
  expect(container.props().style.left).toBe("-9999px");
});

it("render visible", () => {
  const wrapper = mount(
    <MenuNavContainer
      CompLeft={MenuTop}
      contentLeft={USE_CASE_CONTENT.subMenuContent[0]}
      CompRight={MenuTop}
      contentRight={USE_CASE_CONTENT.subMenuContent[1]}
      FooterComp={MenuFooter}
      footerContent={USE_CASE_CONTENT.footerContent}
      visible
      top="20px"
      left="0px"
    />
  );
  const container = wrapper.find(".menu__container");
  expect(container.props().style.opacity).toBe("1");
  expect(container.props().style.zIndex).toBe("400");
  expect(container.props().style.left).toBe("0px");
});
