import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';

class Submit extends Component {

    state = {
        action: {
            feeling: 0,
            supported: 0,
            comments: '',
        },
        redirect: false
    }

    componentDidMount() { // react Component method
        this.getInputs();
    }

    getInputs = () => {
        this.setState({
            ...this.state,
            actions: {
                feeling: this.props.feeling,
                supported: this.props.support,
                comments: this.props.comments

            }
        })
    }



    handleClick = () => {
        console.log('button clicked');

        this.setState({
            ...this.state,
            redirect: true,
        })
        
        axios({
            url: '/',
            method: 'POST',
            data: this.state.action,
        }).then((response) => {
            console.log('DB response:', response);
            this.props.history.push('/Success');
        });
    };


render() {

    console.log(this.props.reduxStore.inputReducer);

    if (this.state.redirect) {
        return <Redirect push to='/' />
    }
    console.log(this.props.hideButton)
    return (
        <>
            <div>
                <p className="pageHeading">Please Review your Responses</p>
            </div>
            <div id="tableDiv">
                <table>
                    <tbody>
                        <tr>
                            <td>Feeling</td>
                            <td>{this.props.reduxStore.feelingReducer}</td>
                        </tr>
                        <tr>
                            <td>Understanding</td>
                            <td>{this.props.reduxStore.understandingReducer}</td>
                        </tr>

                        <tr>
                            <td>Support</td>
                            <td>{this.props.reduxStore.inputReducer}</td>
                        </tr>
                        <tr>
                            <td>Comments</td>
                            <td>{this.props.reduxStore.commentReducer}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                {!this.props.hideButton &&
                    <button onClick={this.handleClick} className="submitButton">Submit</button>
                }
            </div>

        </>
    )
}
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Submit);