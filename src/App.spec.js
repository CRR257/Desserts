// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from "react";
import { shallow } from "enzyme";
// import { configure } from "enzyme";
// import Adapter from 'enzyme-adapter-react-16';
import Home from "./components/Home/Home";
import App from "./App";
import "./setupTests";

// configure({ adapter: new Adapter() });

describe("Home", () => {
  const wrapper = shallow(<App />);
  it("should renders Home component ", () => {
    expect(wrapper).toBeTruthy();
  });
  it("should render Home Component", () => {
    expect(wrapper.find(Home).length).toBe(1);
  });
});
