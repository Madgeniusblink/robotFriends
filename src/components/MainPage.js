import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import ErrorBoundry from './ErrorBoundry'
import Header from './Header'

import './MainPage.css'
import logo from '../styles/logo.svg'


class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots()
    }

    filterRobots = (robots) => {
        return this.props.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }

    render () {
        const {onSearchChange, robots, isPending} = this.props
        if (isPending) {
            return(
                <div className='tc'>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Loading...</h1>
                </div>
            ) 
        } else {
            return (
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={this.filterRobots()} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}

export default MainPage;