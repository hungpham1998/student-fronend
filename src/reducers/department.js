import * as Types from './../constants/ActionTypes';
var departmentState = [];

var findIndex = (department, id) => {
    var result = -1;
    department.forEach((department, index) => {
        if (department.Id === id) {
            result = index;
        }
    });
    return result;
}

const department = (state = departmentState, action) => {
    var index = -1;
    var { id,  } = action;
    switch (action.type) {
        case Types.FETCH_DEAPRTMENT:
            state = action.department;
            return [...state];
        case Types.DELETE_DEAPRTMENT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_DEAPRTMENT:
            state=action.department;
            return [...state];
        case Types.UPDATE_DEAPRTMENT:
            state= action.department;
            return [...state];
        case Types.FILTER_DEPARTMENT:
            state = action.department;
            return [...state];
        default: return [...state];
    }
};

export default department;
