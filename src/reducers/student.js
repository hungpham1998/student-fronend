import * as Types from './../constants/ActionTypes';
var studentState = [];

var findIndex = (student, id) => {
    var result = -1;
    student.forEach((student, index) => {
        if (student.Id === id) {
            result = index;
        }
    });
    return result;
}

const student = (state = studentState, action) => {
    var index = -1;
    var { id } = action;
    switch (action.type) {
        case Types.FETCH_STUDENT:
            state = action.student;
            return [...state];
        case Types.DELETE_STUDENT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_STUDENT:
            state=action.student;
            return [...state];
        case Types.UPDATE_STUDENT:
            state = action.student;
            return [...state];
        default: return [...state];
    }
};

export default student;
