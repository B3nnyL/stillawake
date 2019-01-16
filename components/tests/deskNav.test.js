import { shallow, mount } from "enzyme";
import toJSON, { toJson } from "enzyme-to-json";
import DesktopNav from "../desktopNav";

import Router from "next/router";
const mockedRouter = { push: () => {}, prefetch: () => {} };
Router.router = mockedRouter;

describe("<DesktopNav/>", () => {
  jest.mock("next/router");
  it("render Nav", () => {
    const wrapper = mount(<DesktopNav />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("has initial states", () => {
    const wrapper = mount(<DesktopNav />);
    expect(wrapper.state("isProductOpen")).toBeFalsy();
    expect(wrapper.state("isUseCaseOpen")).toBeFalsy();
    expect(wrapper.state("isWhyOpen")).toBeFalsy();
    expect(wrapper.state("isDevOpen")).toBeFalsy();
    expect(wrapper.state("isTopbarVisible")).toBeTruthy();
  });

  it("toggle product menu", () => {
    const wrapper = mount(<DesktopNav />);
    const a = wrapper.find(".products");
    a.simulate("mouseenter");
    expect(wrapper.state("isProductOpen")).toBeTruthy();
    expect(wrapper.find(".productMenu__container").props().style.opacity).toBe(
      "1"
    );
    a.simulate("mouseleave");
    setTimeout(() => {
      expect(wrapper.state("isProductOpen")).toBeFalsy();
      expect(
        wrapper.find(".productMenu__container").props().style.opacity
      ).toBe("0");
    }, 50);
  });

  it("toggle developers menu", () => {
    const wrapper = mount(<DesktopNav />);
    const a = wrapper.find(".developers");
    a.simulate("mouseenter");
    expect(wrapper.state("isDevOpen")).toBeTruthy();
    expect(
      wrapper
        .find(".menu__container")
        .at(1)
        .props().style.opacity
    ).toBe("1");
    a.simulate("mouseleave");
    setTimeout(() => {
      expect(wrapper.state("isDevOpen")).toBeFalsy();
      expect(
        wrapper
          .find(".menu__container")
          .at(1)
          .props().style.opacity
      ).toBe("0");
    }, 50);
  });

  it("toggle use case menu", () => {
    const wrapper = mount(<DesktopNav />);
    const a = wrapper.find(".use-cases");
    a.simulate("mouseenter");
    expect(wrapper.state("isUseCaseOpen")).toBeTruthy();
    expect(
      wrapper
        .find(".menu__container")
        .at(0)
        .props().style.opacity
    ).toBe("1");
    a.simulate("mouseleave");
    setTimeout(() => {
      expect(wrapper.state("isUseCaseOpen")).toBeFalsy();
      expect(
        wrapper
          .find(".menu__container")
          .at(0)
          .props().style.opacity
      ).toBe("0");
    }, 50);
  });

  it("toggle why now menu", () => {
    const wrapper = mount(<DesktopNav />);
    const a = wrapper.find(".why-now");
    a.simulate("mouseenter");
    expect(wrapper.state("isWhyOpen")).toBeTruthy();
    expect(
      wrapper
        .find(".menu__container")
        .at(2)
        .props().style.opacity
    ).toBe("1");
    a.simulate("mouseleave");
    setTimeout(() => {
      expect(wrapper.state("isWhyOpen")).toBeFalsy();
      expect(
        wrapper
          .find(".menu__container")
          .at(2)
          .props().style.opacity
      ).toBe("0");
    }, 50);
  });
});
