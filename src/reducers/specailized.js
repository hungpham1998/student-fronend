import * as Types from './../constants/ActionTypes';
var specailizedState = [];

var findIndex = (specailized, id) => {
    var result = -1;
    specailized.forEach((specailized, index) => {
        if (specailized.Id === id) {
            result = index;
        }
    });
    return result;
}

const specailized = (state = specailizedState, action) => {
    var index = -1;
    var { id } = action;
    switch (action.type) {
        case Types.FETCH_SPECAILIZED:
            state = action.specailized;
            return [...state];
        case Types.DELETE_SPECAILIZED:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_SPECAILIZED:
            state=action.specailized;
            return [...state];
        case Types.UPDATE_SPECAILIZED:
            state = action.specailized;
            return [...state];
        case Types.FETCH_SPECAILIZED:
            state = action.specailized;
            return [...state];
        default: return [...state];
    }
};

export default specailized;
