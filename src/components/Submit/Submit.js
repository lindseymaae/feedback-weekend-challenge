import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Home extends Component {
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
                feeling: this.props.inputReducer
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
        if (this.state.redirect) {
            return <Redirect push to='/' />
        }


        return (
            <>
                <div>
                    <p className="pageHeading">Please Review your Responses</p>
                </div>
                <table>
                    <tbody>
                        <tr>
                            Feeling
                            <td>0</td>
                        </tr>
                        <tr>
                            Supported
                            <td>0</td>
                        </tr>
                        <tr>
                            Understanding
                            <td>0</td>
                        </tr>
                        <tr>
                            Comments
                            <td>none</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button onClick={this.handleClick} className="submitButton">Submit</button>
                </div>

            </>
        )
    }
}

export default Home;