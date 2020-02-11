import React from "react";
import { shallow } from "enzyme";
import  Desserts  from "../Desserts/Desserts";
import  Dessert  from "../Dessert/Dessert";
import dessertsDataFromJson from "../../data/dessertsData.json";
import sortAndUpdateDesserts from './Desserts';
import "../../setupTests";

describe("Desserts", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Desserts />);
  });
  it("should renders Dessert component", () => {
    expect(wrapper).toBeTruthy();
  });
  it("should render Dessert Component", () => {
    expect(wrapper.find(Dessert).length).toBe(1);
  });
  it("should render dessertsDataFromJson", () => {
    expect(dessertsDataFromJson).toBeDefined();
  });
//   it("should call function sortAndUpdateDesserts once when the component is initiallly mounted", () => {
//     // const expected= [
//     //   {
//     //     "title": "Honey cheesecake",
//     //     "rate": 12
//     //   },
//     //   {
//     //     "title": "Apple cinnamon custard cake",
//     //     "rate": 7
//     //   },
//     //   {
//     //     "title": "Apple and butterscotch pie",
//     //     "rate": 3
//     //   },
      
//     //  ]
//     // const desserts = [
//     //     {
//     //       "title": "Apple and butterscotch pie",
//     //       "rate": 3
//     //     },
//     //     {
//     //       "title": "Apple cinnamon custard cake",
//     //       "rate": 7
//     //     },
//     //     {
//     //       "title": "Honey cheesecake",
//     //       "rate": 12
//     //     },
//     //   ]
//     // const mapped = sortAndUpdateDesserts(desserts).map(dessert => dessert.rate)
//     // expect(mapped).toEqual(expected)
//     expect(sortAndUpdateDesserts).toBeCalled();
// });
})