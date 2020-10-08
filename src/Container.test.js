import React from "react";
import Container from "./components/Container";
import { shallow } from "enzyme";

it("should render Container", () => {
  const wrapper = shallow(<Container />);
  expect(wrapper.exists()).toBe(true);
});

it("should contain a h1 with text 'Container ", () => {
  const wrapper = shallow(<Container />);
  const h1 = wrapper.find("h1");
  expect(h1.text()).toBe("Container");
});

it("it should have a button named 'Click Me!' and render 'Button Clicked!' after being clicked", () => {
  const wrapper = shallow(<Container />);
  const button = wrapper.find("button");
  button.simulate("click");
  const p = wrapper.find("p");

  expect(button.text()).toBe("Click Me!");
  expect(p.text()).toBe('Button Clicked!')
});
