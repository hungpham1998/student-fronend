import * as Types from './../constants/ActionTypes';
var learnyearState = [];

var findIndex = (learnyear, id) => {
    var result = -1;
    learnyear.forEach((learnyear, index) => {
        if (learnyear.Id === id) {
            result = index;
        }
    });
    return result;
}

const learnyear = (state = learnyearState, action) => {
    var index = -1;
    var { id } = action;
    switch (action.type) {
        case Types.FETCH_LEARNYEAR:
            state = action.learnyear;
            return [...state];
        case Types.DELETE_LEARNYEAR:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_LEARNYEAR:
            state=action.learnyear;
            return [...state];
        case Types.UPDATE_LEARNYEAR:
            state = action.learnyear;
            return [...state];
        case Types.FETCH_LEARNYEAR:
            state = action.learnyear;
            return [...state];
        case Types.FILTER_LEARNYEAR:
            state = action.learnyear;
            return [...state];
        default: return [...state];
    }
};

export default learnyear;
