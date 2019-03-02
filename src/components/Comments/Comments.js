import React, { Component } from 'react';
import axios from 'axios';

class Comments extends Component {
    render() {
        return (
            <>
                <div>
                    <p>Any comments you want to leave?</p>
                    <input className="comments" placeholder="Comments" type="text" />
                </div>
                <div>
                    <button>Next: Submit</button>
                </div>
            </>
        )
    }
}

export default Comments;