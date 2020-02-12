import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import Desserts from "../Desserts/Desserts";
import Button from "../UI/Button/Button";

describe("Dessert", () => {
  const onSubmitSpy = jest.fn();
  const testProps = {
    id: 1,
    title: "title",
    image: "src/image.jpg",
    rate: 3
  };

  const wrapper = shallow(<Desserts />);

  it("should exist a Dessert props", () => {
    expect(wrapper).toBeTruthy();
  });
  it("should render Dessert props", () => {
    expect(testProps).toEqual({
      id: 1,
      title: "title",
      image: "src/image.jpg",
      rate: 3
    });
  });
  it("should render list-items", () => {
    expect(wrapper.find(".dessert")).toBeDefined();
  });
  it("should have an img tag", () => {
    expect(wrapper.find('img[alt="dessert.title"]')).toBeDefined();
  });
  it("should render div with className dessert-information", () => {
    expect(wrapper.find(".dessert-information")).toBeDefined();
  });
  it("should render Button Component", () => {
    expect(wrapper.find(Button).length).toBe(1);
  });
  it("should Buttons call onSubmit", () => {
    expect(onSubmitSpy).not.toHaveBeenCalled();
  });
  it("should have a div with class dessert-information", () => {
    expect(wrapper.find(".dessert-information__title")).toBeDefined();
    expect(wrapper.find(".dessert-information__rate")).toBeDefined();
    expect(wrapper.find(".dessert-information__votes")).toBeDefined();
  });
});
