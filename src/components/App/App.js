import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

//Components
import Understanding from '../Understanding/Understanding';
import Feeling from "../Feeling/Feeling";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <Feeling />
          <Understanding />
         


        </header>
        <br/>
      </div>
    );
  }
}

export default App;
