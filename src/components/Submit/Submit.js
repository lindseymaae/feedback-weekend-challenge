import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    render() {
        return (
            <>
            <div>
                    <h1 class="pageHeading">Please Review your Responses</h1>
</div>
<div>
                <button className="submitButton">Submit</button>
            </div>
            </>
        )
    }
}

export default Home;