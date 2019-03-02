import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Components
import Understanding from '../Understanding/Understanding';
import Feeling from "../Feeling/Feeling";
import Comments from "../Comments/Comments";
import Supported from "../Supported/Supported";
import Home from "../Home/Home";
import Submit from "../Submit/Submit";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
          <Router>
            <div>
          <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/feeling">Feeling</Link></li>
                <li><Link to="/understanding">Understanding</Link></li>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/comments">Comments</Link></li>
                <li><Link to="/submit">Submit</Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path ="/feeling" component={Feeling} />
          <Route path ="/understanding" component={Understanding} />
          <Route path="/support" component={Supported} />
          <Route path="/comments" component={Comments} />
          <Route path="/submit" component={Submit} />
          
            </div>
          </Router>

        
        <br/>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
