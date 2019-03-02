import React, { Component } from 'react';
import axios from 'axios';

class Feeling extends Component {
    render() {
        return (
            <div>
                <p class="pageHeading">How are you feeling today?</p>
                <input placeholder="Feeling" type="number" />
                <button>Next</button>
            </div>
        )
    }
}

export default Feeling;