import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import Submit from '../Submit/Submit';
class Supported extends Component {
    state = {
        redirect: false,
        support: '',
    }

    handleClick = () => {
        console.log('button clicked');

        this.setState({
            ...this.state,
            redirect: true,
        })
    this.props.dispatch({ type: "SET_SUPPORT_RESPONSE", payload: this.state.support })

    }
    handleChange = (event) => {
        this.setState({
            ...this.state,
            support: event.target.value,    
        })

    }
    render() {
        console.log(this.props.reduxStore);
                
        if (this.state.redirect) {
            return <Redirect push to='/comments' />
        }

        return (

            <div>
                <p className="pageHeading">How well are you being supported?</p>
                <input
                    className="inputField"
                    placeholder="Supported"
                    type="number"
                    onChange={this.handleChange}
                />
                <button className="nextButton" onClick={this.handleClick}>Next</button>
                <Submit />
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Supported);