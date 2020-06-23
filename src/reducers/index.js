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
import account from './accountReducer';
import role from './roleReducer';
import attendancesheet from './attendancesheet';


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
    authReducer,
    account,
    role,
    attendancesheet
});

export default appReducers;
