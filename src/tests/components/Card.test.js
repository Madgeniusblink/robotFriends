import { shallow, mount, render } from 'enzyme';
import React from 'react'
import Card from '../../components/Card'
import '../setupTest'



it('expect card component length to be one', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.length).toMatchSnapshot()
})

