import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Button", () => {
  const wrapper = shallow(<Button />);
  it("should Button be defined", () => {
    expect(Button).toBeTruthy();
  });
  it("should render Button props", () => {
    expect(wrapper).toBeTruthy();
  });
});
