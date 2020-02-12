import React from "react";
import { shallow } from "enzyme";
import Desserts from "../Desserts/Desserts";
import Button from "../UI/Button/Button";
import dessertsDataFromJson from "../../data/dessertsData.json";
import { addRateHandler } from "../Desserts/Desserts";

import "../../setupTests";

describe("Desserts", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<Desserts />);

  it("should call function sortAndUpdateDesserts once when the component is initiallly mounted", () => {
    const sortAndUpdateDesserts = jest.fn();
    sortAndUpdateDesserts(dessertsDataFromJson);
    expect(sortAndUpdateDesserts).toHaveBeenCalled();
  });
  it("should call function addRateHandler and clearInterval when the function randomClickHandler is clicked", () => {
    const randomClickHandler = jest.fn();
    const clearIntervalFunction = jest.fn();
    const timer = setInterval(() => {
      const randomItem = Math.floor(Math.random() * 12);
      addRateHandler(null, randomItem.toString());
      clearInterval(timer);
      randomClickHandler();
      expect(clearIntervalFunction).toHaveBeenCalled();
    }, 1000 + Math.floor(Math.random() * 2000));
  });
  it("should call function clearTimeout when the function stopClickHandler is clicked", () => {
    const clearTimeout = jest.fn();
    clearTimeout();
    expect(clearTimeout).toHaveBeenCalled();
  });
  it("should renders Dessert component", () => {
    expect(wrapper).toBeTruthy();
  });
  it("should renders Button component", () => {
    expect(wrapper).toBeTruthy();
  });
  it("should render Button Component", () => {
    expect(wrapper.find(Button).length).toBe(1);
  });
  it("should Buttons call onSubmit", () => {
    expect(onSubmitSpy).not.toHaveBeenCalled();
  });
  it("should render dessertsDataFromJson", () => {
    expect(dessertsDataFromJson).toBeDefined();
  });
  it("should be selecteable by classname desserts-randomclick", () => {
    expect(wrapper.find(".desserts-randomclick").length).toBe(1);
  });
  it("should render ul list-items", () => {
    expect(wrapper.find(".desserts-container")).toBeDefined();
  });
});
