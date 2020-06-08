
import TYPES from '../../constants/actionType';

const departmentState =[]
export default (state = departmentState, action) => {
    switch (action.type) {
        case TYPES.INSERT_DEPARTMENT:
            return [
                ...state,
                ...action.payload
            ];
        case TYPES.DELETE_DEPARTMENT:
            return state.filter(({ id }) => id !== action.payload);
        case TYPES.UPDATE_DEPARTMENT:
            return state.map((department) => {
                if (department.id === action.id) {
                    return  [
                        ...state,
                        ...action.payload
                    ];
                } else {
                    return department;
                }
            });
        case TYPES.GET_DEPARTMENT:
            return  action.payload
        default:
            return state;
    }
};
