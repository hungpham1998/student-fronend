import * as Types from './../constants/ActionTypes';
var learnclassState = [];

var findIndex = (learnclass, id) => {
    var result = -1;
    learnclass.forEach((learnclass, index) => {
        if (learnclass.Id === id) {
            result = index;
        }
    });
    return result;
}

const learnclass = (state = learnclassState, action) => {
    var index = -1;
    var { id, learnclass } = action;
    switch (action.type) {
        case Types.FETCH_LEARNCLASS:
            state = action.learnclass;
            return [...state];
        case Types.DELETE_LEARNCLASS:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_LEARNCLASS:
            state.push(action.learnclass);
            return [...state];
        case Types.UPDATE_LEARNCLASS:
            index = findIndex(state, learnclass.Id);
            state[index] = learnclass;
            return [...state];
        case Types.FILTER_LEARNCLASS:
            state = action.learnclass;
            return [...state];
        default: return [...state];
    }
};

export default learnclass;
