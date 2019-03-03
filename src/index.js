import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


const inputReducer = (state = [], action) => {
    console.log(action.payload);
    if (action.type === 'SET_SUPPORT_RESPONSE') {
        return action.payload;
    }
    return state;
}
const feelingReducer = (state = [], action) =>{
    if (action.type === 'SET_FEELING_RESPONSE') {
        return action.payload;
    }
    return state;
}
const understandingReducer = () =>{
    if (action.type === 'SET_UNDERSTANDING_RESPONSE') {
        return action.payload;
    }
    return state;

}
    const storeInstance = createStore(
    combineReducers({
    inputReducer,
    feelingReducer,
    understandingReducer,
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
