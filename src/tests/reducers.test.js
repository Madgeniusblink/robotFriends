import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED } from '../constants'
import './setupTest'
import * as reducers from '../reducers'
import * as actions from '../actions'

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('Should return initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''})
    })

    it('Should return initial state', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({ 
            searchField: 'abc'
        })
    })
})

describe('requestRobots', () => {
    const initialStateSearch = {
        robots: [],
        isPending: false,
        error: ""
    }

    it('Should return initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateSearch)
    })

    it('should handle Request_robots_pending action', () => {
        expect(reducers.requestRobots(initialStateSearch, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({ 
            robots: [],
            isPending: true,
            error: ""
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialStateSearch, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({ 
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }],
            isPending: false,
            error: ""
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialStateSearch, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'noooo'
        })).toEqual({ 
            robots: [],
            isPending: false,
            error: "noooo"
        })
    })
})