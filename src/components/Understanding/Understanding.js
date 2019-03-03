import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import Submit from '../Submit/Submit';

class Understanding extends Component {
    state = {
        redirect: false,
        understanding: 0,
    }
    //Take in input
    handleChange = (event) => {
        this.setState({
            ...this.state,
            understanding: event.target.value,
        })
    }

//sends input to reducer and switches pages
    handleClick = () => {
        console.log('button clicked');
        this.setState({
            ...this.state,
            redirect: true,
        })
        this.props.dispatch({ type: "SET_UNDERSTANDING_RESPONSE", payload: this.state.understanding })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to='/support' />
        }

        return (
            <div>
                <p className="pageHeading">How well are you understanding the content?</p>
                <input
                    className="inputField"
                    placeholder="Understanding"
                    type="number"
                    onChange={this.handleChange}
                />
                <button className="nextButton" onClick={this.handleClick}>Next</button>
                <Submit hideButton />
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Understanding);