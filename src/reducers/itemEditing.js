import * as Types from './../constants/ActionTypes';

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_DEAPRTMENT:
            return action.department;
        case Types.EDIT_LEARNCLASS:
            console.log(action.learnclass)
            return action.learnclass;
        default:
            return state;
    }
}

export default itemEditing;
