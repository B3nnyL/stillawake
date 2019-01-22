import { shallow, mount } from "enzyme";
import toJSON, { toJson } from "enzyme-to-json";
import MobileNav from "../mobileNav";

import Router from "next/router";
const mockedRouter = { push: () => {}, prefetch: () => {} };
Router.router = mockedRouter;

describe("<MobileNav/>", () => {
  jest.mock("next/router");
  it("render Nav", () => {
    const wrapper = mount(<MobileNav />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("has initial states", () => {
    const wrapper = mount(<MobileNav />);
    expect(wrapper.state("isSearchClicked")).toBeFalsy();
    expect(wrapper.state("isToggleClicked")).toBeFalsy();
    expect(wrapper.state("isTopbarVisible")).toBeTruthy();
  });

  it("toggle search", () => {
    const wrapper = mount(<MobileNav />);
    const a = wrapper.find(".search-btn");
    a.simulate("click");
    expect(wrapper.state("isSearchClicked")).toBeTruthy();
    expect(wrapper.find(".search-container").props().style.opacity).toBe("1");
    a.simulate("click");
    setTimeout(() => {
      expect(wrapper.state("isSearchClicked")).toBeFalsy();
      expect(wrapper.find(".search").props().style.opacity).toBe("0");
    }, 50);
  });

  it("toggle nav menu", () => {
    const wrapper = mount(<MobileNav />);
    const a = wrapper.find(".nav-toggle");
    a.simulate("click");
    expect(wrapper.state("isToggleClicked")).toBeTruthy();
    expect(wrapper.find(".navlist-container").props().style.opacity).toBe("1");
    a.simulate("click");
    setTimeout(() => {
      expect(wrapper.state("isToggleClicked")).toBeFalsy();
      expect(wrapper.find(".navlist-container").props().style.opacity).toBe(
        "0"
      );
    }, 50);
  });
});
