import { combineReducers } from 'redux';
import itemEditing from './itemEditing';
import learnclass from './learnclass';
import department from './department';
import student from './student';
import specailized from './specailized';
import learnyear from './LearnYear';
import subject from './subject';
import position from './Posiotion';
import pointstudent from './pointstudent';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

const appReducers = combineReducers({
    department,
    learnclass,
    student,
    itemEditing,
    specailized,
    learnyear,
    subject,
    position,
    pointstudent,
    errorReducer,
    authReducer
});

export default appReducers;
