import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Feeling extends Component {
    state = {
        redirect: false
    }
handleChange = () =>{
    
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
            return <Redirect push to='/understanding' />
        }

        return (
            <div>
                <p className="pageHeading">How are you feeling today?</p>
                <input onChange={this.handleChange()} className="inputField" placeholder="Number" type="number" />
                <button className="nextButton" onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default Feeling;