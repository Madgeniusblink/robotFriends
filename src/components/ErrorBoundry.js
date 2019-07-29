import React, { Component } from 'react';


class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
        
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError){
            return (
                <div>
                    <h1>Oops, This shouldnt happen</h1>
                    <p>Please get in touch with us! Thank you</p>
                </div>
            )
        }
        return this.props.children
    }

}

export default ErrorBoundry;