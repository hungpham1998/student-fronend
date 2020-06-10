import { combineReducers } from 'redux';
import itemEditing from './itemEditing';
import learnclass from './learnclass';
import department from './department';

const appReducers = combineReducers({
    department,
    learnclass,
    itemEditing
});

export default appReducers;
