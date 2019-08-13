import { shallow, mount, render } from 'enzyme';
import React from 'react'
import CardList from '../../components/CardList'
import '../setupTest'

it('', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'JohnLuc',
            email: 'john@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})