import * as Types from './../constants/ActionTypes';
var pointstudentState = [];

var findIndex = (pointstudent, id) => {
    var result = -1;
    pointstudent.forEach((pointstudent, index) => {
        if (pointstudent.Id === id) {
            result = index;
        }
    });
    return result;
}

const pointstudent = (state = pointstudentState, action) => {
    var index = -1;
    var { id } = action;
    switch (action.type) {
        case Types.FETCH_POINTSTUDENT:
            state = action.pointstudent;
            return [...state];
        case Types.DELETE_POINTSTUDENT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_POINTSTUDENT:
            state= action.pointstudent;
            return [...state];
        case Types.UPDATE_POINTSTUDENT:
            state = action.pointstudent;
            return [...state];
        case Types.FETCH_POINTSTUDENT:
            state = action.pointstudent;
            return [...state];
        // case Types.FILTER_pointstudent:
        //     state = action.pointstudent;
        //     return [...state];
        default: return [...state];
    }
};

export default pointstudent;
