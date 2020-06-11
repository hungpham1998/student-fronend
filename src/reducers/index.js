import { combineReducers } from 'redux';
import itemEditing from './itemEditing';
import learnclass from './learnclass';
import department from './department';
import student from './student';
import specailized from './specailized';


const appReducers = combineReducers({
    department,
    learnclass,
    student,
    itemEditing,
    specailized
});

export default appReducers;
