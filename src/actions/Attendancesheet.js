
import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchAttendancesheetRequest = () => {
    return dispatch => {
        return  callApi('attendancesheet', 'GET', null).then(res => {
            let data = [];
            res.data.attendancesheet.forEach(item => {
                data.push(item);
            });
            dispatch(actFetchAttendancesheet(data));
        });
    };
}

export const actFetchAttendancesheet =  (attendancesheet) => {
    return {
        type : Types.FETCH_ATTENDANCESHEET,
        attendancesheet
    }
}

export const actDeleteAttendancesheetRequest = (id) => {
    return dispatch => {
        return callApi(`attendancesheet/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteAttendancesheet(id));
        })
    }
}

export const actDeleteAttendancesheet = (id) => {
    return {
        type : Types.DELETE_ATTENDANCESHEET,
        id
    }
}

export const actAddAttendancesheetRequest = (attendancesheet) => {
    return dispatch => {
        return callApi('attendancesheet', 'POST', attendancesheet).then(res => {
            let data = [];
            res.data.attendencesheet.forEach((item) => {
                data.push(item)
            })
            dispatch(actAddAttendancesheet(data));
        });
    }
}

export const actAddAttendancesheet = (attendancesheet) => {
    return {
        type : Types.ADD_ATTENDANCESHEET,
        attendancesheet
    }
}

export const actGetAttendancesheetRequest = (id) => {
    return dispatch => {
        return callApi(`attendancesheet/${id}`, 'GET', null).then(res => {
            console.log(res.data)
            dispatch(actGetAttendancesheet(res.data));
        });
    }
}

export const actGetAttendancesheet = (attendancesheet) => {
    return {
        type : Types.EDIT_ATTENDANCESHEET,
        attendancesheet
    }
}

export const actUpdateAttendancesheetRequest = (attendancesheet) => {
    return dispatch => {
        return callApi(`attendancesheet/${attendancesheet.Id}`, 'PUT', attendancesheet).then(res => {
            dispatch(actUpdateAttendancesheet(res.data.attendancesheet));
        });
    }
}

export const actUpdateAttendancesheet = (attendancesheet) => {
    return {
        type : Types.UPDATE_ATTENDANCESHEET,
        attendancesheet
    }
}

export const actGetAttendancesheetStudentRequset = (id) => {
    if (id) {
        return dispatch => {
            return callApi(`student/${id}/attendancesheet`, 'GET', null).then(res => {
                if (res.data[0].attendancesheets.lenght !== 0 ) {
                    dispatch(actGetAttendancesheetStudent(res.data[0].attendancesheets));
                }
                else {
                    dispatch(actGetAttendancesheetStudent(null));
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
export const actGetAttendancesheetStudent = (attendancesheet) => {
    return {
        type : Types.GET_ATTENDANCESHEET,
        attendancesheet
    }
}

// // filter 
// export const onFilterpointstudent = (title) => {
//     return dispatch => {
//         return callApi(`attendancesheet/find?Title=${title}`, 'GET',null
//           ).then(res =>{
//               let data = [];
//                 res.data.attendancesheet.rows.forEach(item => {
//                     data.push(item);
//                 });
//                 dispatch(actFilterpointstudent(data));
//         })
//     }
// }

// export const actFilterpointstudent = (attendancesheet) => {
//     return {
//         type : Types.FILTER_POINTSTUDENT,
//         attendancesheet
//     }
// }
