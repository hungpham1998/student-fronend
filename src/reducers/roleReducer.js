import * as Types from './../constants/ActionTypes';
var roleState = [];

var findIndex = (role, id) => {
    var result = -1;
    role.forEach((role, index) => {
        if (role.Id === id) {
            result = index;
        }
    });
    return result;
}

const role = (state = roleState, action) => {
    var index = -1;
    var { id,  } = action;
    switch (action.type) {
        case Types.FETCH_ROLE:
            state = action.role;
            return [...state];
        // case Types.DELETE_DEAPRTMENT:
        //     index = findIndex(state, id);
        //     state.splice(index, 1);
        //     return [...state];
        // case Types.ADD_DEAPRTMENT:
        //     state=action.department;
        //     return [...state];
        // case Types.UPDATE_DEAPRTMENT:
        //     state= action.department;
        //     return [...state];
        // case Types.FILTER_DEPARTMENT:
        //     state = action.department;
        //     return [...state];
        default: return [...state];
    }
};

export default role;
