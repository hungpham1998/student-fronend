import * as Types from './../constants/ActionTypes';
var semesterState = [];

var findIndex = (semester, id) => {
    var result = -1;
    semester.forEach((semester, index) => {
        if (semester.Id === id) {
            result = index;
        }
    });
    return result;
}

const semester = (state = semesterState, action) => {
    var index = -1;
    var { id } = action;
    switch (action.type) {
        case Types.FETCH_SEMESTER:
            state = action.semester;
            return [...state];
        case Types.DELETE_SEMESTER:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_SEMESTER:
            state= action.semester;
            return [...state];
        case Types.UPDATE_SEMESTER:
            state = action.semester;
            return [...state];
        case Types.FETCH_SEMESTER:
            state = action.semester;
            return [...state];
        case Types.FILTER_SEMESTER:
            state = action.semester;
            return [...state];
        default: return [...state];
    }
};

export default semester;
