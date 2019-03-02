import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
class Home extends Component {
    state = {
        redirect: false,
    }

    handleClick = () => {
        console.log('button clicked');
        
        this.setState({
            ...this.state,
            redirect: true,
        })
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to='/feeling' />
        }
        return (
            <div>
                <h1 className="pageHeading">Please Enter Your Feedback on the Following Pages</h1>
                <button onClick={this.handleClick} className="homeButton">Next: How are you feeling?</button>
            </div>
        )
    }
}

export default Home;