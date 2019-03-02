import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Understanding extends Component {
    state = {
        redirect: false
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
            return <Redirect push to='/support' />
        }

        return (
            <div>
                <p className="pageHeading">How well are you understanding the content?</p>
                <input className="inputField" placeholder="Number" type="number" />
                <button className="nextButton" onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default Understanding;