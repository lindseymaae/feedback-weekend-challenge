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

        console.log(this.props.reduxStore.inputReducer.support);
        
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
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Supported</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Understanding</td>
                            <td>0</td>
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