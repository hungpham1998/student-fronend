import { combineReducers } from 'redux';
import itemEditing from './itemEditing';
import learnclass from './learnclass';
import department from './department';
import student from './student';
import specailized from './specailized';
import learnyear from './LearnYear'

const appReducers = combineReducers({
    department,
    learnclass,
    student,
    itemEditing,
    specailized,
    learnyear
});

export default appReducers;
