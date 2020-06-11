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
        default:
            return state;
    }
}

export default itemEditing;
