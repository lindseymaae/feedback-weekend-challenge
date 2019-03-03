import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import Submit from '../Submit/Submit';

class Feeling extends Component {
    state = {
        redirect: false,
        feeling: 0,
    }
    handleChange = (event) => {
        this.setState({
            ...this.state,
            feeling: event.target.value,
        })
    }
    handleClick = () => {
        console.log('button clicked');
        this.setState({
            ...this.state,
            redirect: true,
        })
        this.props.dispatch({ type: "SET_FEELING_RESPONSE", payload: this.state.feeling })
    }

    render() {
        console.log(this.state.feeling);
        
        if (this.state.redirect) {
            return <Redirect push to='/understanding' />
        }

        return (
            <div>
                <p className="pageHeading">How are you feeling today?</p>
                <input
                    className="inputField"
                    placeholder="Feeling"
                    type="number"
                    onChange={this.handleChange}
                />
                <button className="nextButton" 
                onClick={this.handleClick}>Next</button>
                <Submit />
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Feeling);