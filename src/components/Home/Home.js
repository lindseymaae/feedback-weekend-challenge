import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 class="pageHeading">Please Enter Your Feedback on the Following Pages</h1>
                <button className="nextButton">Next: How are you feeling?</button>
            </div>
        )
    }
}

export default Home;