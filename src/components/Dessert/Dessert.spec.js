import React from 'react';
import {shallow} from 'enzyme';
import '../../setupTests';
import Desserts from '../Desserts/Desserts';
import Dessert from '../Dessert/Dessert';
// import Button from '../UI/Button';

describe("Dessert", () => {
    const testProps = {
        id:1
        // title="title"
    }


const wrapper = shallow(<Desserts {...testProps} />);

it("renders Dessert props", () => {
    expect(wrapper).toBeTruthy();
});
})
