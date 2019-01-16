import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import QuoteItem from "../quoteItem";
import { content } from "../../utils/quoteContent";

describe("<QuoteItem />", () => {
  it("render QuoteItem", () => {
    const wrapper = shallow(<QuoteItem quote={content} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render text", () => {
    const wrapper = shallow(<QuoteItem quote={content} />);
    expect(wrapper.find("p")).toBeTruthy;
  });
});
