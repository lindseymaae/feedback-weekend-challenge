import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const reduxState = {feeling: '', understanding: '', support: '', comments: ''}

const inputReducer = (state = reduxState, action) => {
    console.log(action.payload);
    if (action.type === 'SET_SUPPORT_RESPONSE') {
        return {...state, support: action.payload};
    }
    else if (action.type === 'SET_FEELING_RESPONSE') {
        return { ...state, feeling: action.payload };
    }
    else if (action.type === 'SET_UNDERSTANDING_RESPONSE') {
        return { ...state, understanding: action.payload };
    }
    else if (action.type === 'SET_COMMENT_RESPONSE') {
        return { ...state, comments: action.payload };
    }
    else if (action.type === 'CLEAR_STATE'){
        return reduxState;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        inputReducer,
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
