import React, { Component } from 'react';
import axios from 'axios';

class Supported extends Component {
    render() {
        return (
            <div>
                <p class="pageHeading">How well are you being supported?</p>
                <input placeholder="Supported" type="number" />
                <button>Next</button>
            </div>
        )
    }
}

export default Supported;