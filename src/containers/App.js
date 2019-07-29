import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import '../containers/App.css'
import logo from '../styles/logo.svg'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((users) => this.setState({robots: users}))
    }

    OnSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
    }

    render () {
        const { robots, searchfield } = this.state
        // CardList
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!robots.length) {
            return(
                <div className='tc'>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Loading...</h1>
                </div>
            ) 
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.OnSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App