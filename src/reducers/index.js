import { combineReducers } from 'redux';
import itemEditing from './itemEditing';
import learnclass from './learnclass';
import department from './department';
import student from './student';
import specailized from './specailized';
import learnyear from './LearnYear';
import subject from './subject';



const appReducers = combineReducers({
    department,
    learnclass,
    student,
    itemEditing,
    specailized,
    learnyear,
    subject
});

export default appReducers;
