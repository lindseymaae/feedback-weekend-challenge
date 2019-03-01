import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <div>
            <p>How are you feeling today?</p>
            <input placeholder="Feeling" type="number" />
            <button>Next</button>
          </div>
          
          <div>
            <p>How well are you understanding the content?</p>
            <input placeholder="Understanding" type="number" />
            <button>Next</button>
          </div>
          <div>
            <p>How well are you being supported?</p>
            <input placeholder="Supported" type="number" />
            <button>Next</button>
          </div>
          <div>
            <p>Any comments you want to leave?</p>
            <input placeholder="Comments" type="text" />
            <button>Next</button>
          </div>



        </header>
        <br/>
      </div>
    );
  }
}

export default App;
