import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home'
import Desserts from '../Desserts/Desserts';
import "../../setupTests";

describe("Desserts", () => {
  const wrapper = shallow(<Home />);
  it("should renders Desserts Component ", () => {
    expect(wrapper).toBeTruthy();
  });
  it("should render Desserts Component", () => {
    expect(wrapper.find(Desserts).length).toBe(1);
  });
});
