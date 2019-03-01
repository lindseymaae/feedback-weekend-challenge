import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Comments extends Component {
    render() {
        return (
            <div>
                <p>Any comments you want to leave?</p>
                <input placeholder="Comments" type="text" />
                <button>Next</button>
            </div>

        )
    }
}

export default Comments;