import { shallow, mount, render } from 'enzyme';
import React from 'react'
import Scroll from '../../components/Scroll'
import '../setupTest'


it('expect to render Scroll component ', () => {
    expect(shallow(<Scroll />)).toMatchSnapshot()
})