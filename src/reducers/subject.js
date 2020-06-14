import * as Types from './../constants/ActionTypes';
var subjectState = [];

var findIndex = (subject, id) => {
    var result = -1;
    subject.forEach((subject, index) => {
        if (subject.Id === id) {
            result = index;
        }
    });
    return result;
}

const subject = (state = subjectState, action) => {
    var index = -1;
    var { id } = action;
    switch (action.type) {
        case Types.FETCH_SUBJECT:
            state = action.subject;
            return [...state];
        case Types.DELETE_SUBJECT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_SUBJECT:
            state=action.subject;
            return [...state];
        case Types.UPDATE_SUBJECT:
            state = action.subject;
            return [...state];
        case Types.FETCH_SUBJECT:
            state = action.subject;
            return [...state];
        case Types.FILTER_SUBJECT:
            state = action.subject;
            return [...state];
        default: return [...state];
    }
};

export default subject;
