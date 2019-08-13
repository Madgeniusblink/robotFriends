import { shallow, mount, render } from 'enzyme';
import React from 'react'
import ErrorBoundry from '../../components/ErrorBoundry'
import '../setupTest'


it('expect to render errorboundery component ', () => {
    expect(shallow(<ErrorBoundry />)).toMatchSnapshot()
})