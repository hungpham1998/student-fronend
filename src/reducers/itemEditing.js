import * as Types from './../constants/ActionTypes';

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_DEAPRTMENT:
            return action.department;
        case Types.EDIT_LEARNCLASS:
            return action.learnclass;
        case Types.EDIT_STUDENT:
            return action.student;
        case Types.EDIT_SPECAILIZED:
            return action.specailized;
        case Types.EDIT_LEARNYEAR:
            return action.learnyear;
        case Types.EDIT_SUBJECT:
            return action.subject;
        case Types.EDIT_POSITION:
            return action.position;
        case Types.EDIT_POINTSTUDENT:
            return action.pointstudent;
        case Types.EDIT_ATTENDANCESHEET:
            return action.attendancesheet;
        case Types.EDIT_SEMESTER:
            return action.semester;
        default:
            return state;
    }
}

export default itemEditing;
