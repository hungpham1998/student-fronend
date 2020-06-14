import * as Types from './../constants/ActionTypes';
var positionState = [];

var findIndex = (position, id) => {
    var result = -1;
    position.forEach((position, index) => {
        if (position.Id === id) {
            result = index;
        }
    });
    return result;
}

const position = (state = positionState, action) => {
    var index = -1;
    var { id } = action;
    switch (action.type) {
        case Types.FETCH_POSITION:
            state = action.position;
            return [...state];
        case Types.DELETE_POSITION:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_POSITION:
            state= action.position;
            return [...state];
        case Types.UPDATE_POSITION:
            state = action.position;
            return [...state];
        case Types.FETCH_POSITION:
            state = action.position;
            return [...state];
        case Types.FILTER_POSITION:
            state = action.position;
            return [...state];
        default: return [...state];
    }
};

export default position;
