import { shallow, mount, render } from 'enzyme';
import React from 'react'
import SearchBox from '../../components/SearchBox'
import '../setupTest'


it('expect to render SearchBox component ', () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot()
})

it('test input SearchBox ', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'JohnLuc',
            email: 'john@gmail.com'
        }
    ]
    const searchChange = mockRobots.name
    
    expect(shallow(<SearchBox onChange={searchChange} />)).toMatchSnapshot()
})