import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Supported extends Component {
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
            return <Redirect push to='/comments' />
        }

        return (

            <div>
                <p className="pageHeading">How well are you being supported?</p>
                <input className="inputField" placeholder="Supported" type="number" />
                <button className="nextButton" onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default Supported;