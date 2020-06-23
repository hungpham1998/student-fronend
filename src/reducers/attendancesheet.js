import * as Types from './../constants/ActionTypes';
var attendancesheetState = [];

var findIndex = (attendancesheet, id) => {
    var result = -1;
    attendancesheet.forEach((attendancesheet, index) => {
        if (attendancesheet.Id === id) {
            result = index;
        }
    });
    return result;
}

const attendancesheet = (state = attendancesheetState, action) => {
    var index = -1;
    var { id } = action;
    switch (action.type) {
        case Types.FETCH_ATTENDANCESHEET:
            state = action.attendancesheet;
            return [...state];
        case Types.DELETE_ATTENDANCESHEET:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_ATTENDANCESHEET:
            state= action.attendancesheet;
            return [...state];
        case Types.UPDATE_ATTENDANCESHEET:
            state = action.attendancesheet;
            return [...state];
        case Types.FETCH_ATTENDANCESHEET:
            state = action.attendancesheet;
            return [...state];
        case Types.GET_ATTENDANCESHEET:
            state = action.attendancesheet;
            console.log(state)
            return [...state];
        // case Types.FILTER_pointstudent:
        //     state = action.attendancesheet;
        //     return [...state];
        default: return [...state];
    }
};

export default attendancesheet;
