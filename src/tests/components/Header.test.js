import { shallow, mount, render } from 'enzyme';
import React from 'react'
import Header from '../../components/Header'
import '../setupTest'


it('expect to render Header component ', () => {
    expect(shallow(<Header />)).toMatchSnapshot()
})