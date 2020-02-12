import React from "react";
import { shallow } from "enzyme";
import Home from "./components/Home/Home";
import App from "./App";
import "./setupTests";

describe("Home", () => {
  const wrapper = shallow(<App />);
  it("should renders Home component ", () => {
    expect(wrapper).toBeTruthy();
  });
  it("should render Home Component", () => {
    expect(wrapper.find(Home).length).toBe(1);
  });
});
