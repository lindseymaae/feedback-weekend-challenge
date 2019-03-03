import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

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

    getInputs = () =>{
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
    }

    render() {

        console.log(this.props.reduxStore.inputReducer);
        
        if (this.state.redirect) {
            return <Redirect push to='/' />
        }


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
                            <td>Supported</td>
                                <td>{this.props.reduxStore.inputReducer}</td>
                        </tr>
                        <tr>
                            <td>Understanding</td>
                                <td>{this.props.reduxStore.understandingReducer}</td>
                        </tr>
                        <tr>
                            <td>Comments</td>
                            <td>none</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div>
                    <button onClick={this.handleClick} className="submitButton">Submit</button>
                </div>

            </>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Submit);