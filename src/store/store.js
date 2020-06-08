import { createStore, applyMiddleware } from "redux";
import allReducers from '../components/reducer';
import thunk from 'redux-thunk';

export default () => {
    return createStore(allReducers, applyMiddleware(thunk));
};
