import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Comments extends Component {
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
            return <Redirect push to='/submit' />
        }

        return (
            <>
                <div>
                    <p className="pageHeading">Any comments you want to leave?</p>
                    <input className="comments" placeholder="Comments" type="text" />
                </div>
                <div>
                    <button onClick={this.handleClick} className="nextButton">Next: Submit</button>
                </div>
            </>
        )
    }
}

export default Comments;