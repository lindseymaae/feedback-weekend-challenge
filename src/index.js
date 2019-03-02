import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


const inputReducer = (state = [], action) => {
    console.log(action.payload);
    if (action.type === 'SET_RESPONSE') {
        return action.payload;
    }
    return state;
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
