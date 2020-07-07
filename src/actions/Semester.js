import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchSemesterRequest = () => {
    return dispatch => {
        return  callApi('semester', 'GET', null).then(res => {
            let data = [];
            res.data.semester.rows.forEach(item => {
                data.push(item);
            });
            dispatch(actFetchSemester(data));
        });
    };
}

export const actFetchSemester =  (semester) => {
    return {
        type : Types.FETCH_SEMESTER,
        semester
    }
}

export const actDeleteSemesterRequest = (id) => {
    return dispatch => {
        return callApi(`semester/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteSemester(id));
        })
    }
}

export const actDeleteSemester = (id) => {
    return {
        type : Types.DELETE_SEMESTER,
        id
    }
}

export const actAddSemesterRequest = (semester) => {
    return dispatch => {
        return callApi('semester', 'POST', semester).then(res => {
            let data = [];
            res.data.semester.map((item) => {
                data.push(item)
            })
            dispatch(actAddSemester(data));
        });
    }
}

export const actAddSemester = (semester) => {
    return {
        type : Types.ADD_SEMESTER,
        semester
    }
}

export const actGetSemesterRequest = (id) => {
    return dispatch => {
        return callApi(`semester/${id}`, 'GET', null).then(res => {
            console.log(res.data);
            dispatch(actGetSemester(res.data));
        });
    }
}

export const actGetSemester = (semester) => {
    return {
        type : Types.EDIT_SEMESTER,
        semester
    }
}

export const actUpdateSemesterRequest = (semester) => {
    return dispatch => {
        return callApi(`semester/${semester.Id}`, 'PUT', semester).then(res => {
            dispatch(actUpdateSemester(res.data.semester));
        });
    }
}

export const actUpdateSemester = (semester) => {
    return {
        type : Types.UPDATE_SEMESTER,
        semester
    }
}

// filter 
export const onFilterSemester = (title) => {
    return dispatch => {
        return callApi(`semester/find?Title=${title}`, 'GET',null
          ).then(res =>{
              let data = [];
              console.log(res.data)
                res.data.semester.rows.map(item => {
                    data.push(item);
                });
                dispatch(actFilterSemester(data));
        })
    }
}

export const actFilterSemester = (semester) => {
    return {
        type : Types.FILTER_SEMESTER,
        semester
    }
}
