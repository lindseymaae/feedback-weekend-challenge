import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import Submit from '../Submit/Submit';

class Comments extends Component {
    state = {
        redirect: false,
        comments: '',
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            comments: event.target.value,
        })
    }

    handleClick = () => {
        console.log('button clicked');
        this.setState({
            ...this.state,
            redirect: true,
        })
        this.props.dispatch({ type: "SET_COMMENT_RESPONSE", payload: this.state.comments })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to='/submit' />
        }

        return (
            <>
                <div>
                    <p className="pageHeading">Any comments you want to leave?</p>
                    <input
                        className="inputField"
                        placeholder="Comments"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <button onClick={this.handleClick} className="nextButton">Next: Submit</button>
                </div>
                <Submit hideButton/>
            </>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Comments);