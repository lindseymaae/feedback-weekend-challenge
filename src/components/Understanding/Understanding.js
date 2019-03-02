import React, { Component } from 'react';
import axios from 'axios';

class Understanding extends Component {
    render() {
        return (
            <div>
                <p class="pageHeading">How well are you understanding the content?</p>
                <input placeholder="Understanding" type="number" />
                <button>Next</button>
            </div>
        )
    }
}

export default Understanding;