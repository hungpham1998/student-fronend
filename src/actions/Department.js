import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchDepartmentRequest = () => {
    return dispatch => {
        return  callApi('department', 'GET', null).then(res => {
            let data = [];
            res.data.department.rows.forEach(item => {
                data.push(item);
            });
            dispatch(actFetchDepartment(data));
        });
    };
}

export const actFetchDepartment =  (department) => {
    return {
        type : Types.FETCH_DEAPRTMENT,
        department
    }
}

export const actDeleteDepartmentRequest = (id) => {
    return dispatch => {
        return callApi(`department/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteDepartment(id));
        })
    }
}

export const actDeleteDepartment = (id) => {
    return {
        type : Types.DELETE_DEAPRTMENT,
        id
    }
}

export const actAddDepartmentRequest = (department) => {
    return dispatch => {
        return callApi('department', 'POST', department).then(res => {
            dispatch(actAddDepartment(res.data));
        });
    }
}

export const actAddDepartment = (department) => {
    return {
        type : Types.ADD_DEAPRTMENT,
        department
    }
}

export const actGetDepartmentRequest = (id) => {
    return dispatch => {
        return callApi(`department/${id}`, 'GET', null).then(res => {
            dispatch(actGetDepartment(res.data));
        });
    }
}

export const actGetDepartment = (department) => {
    return {
        type : Types.EDIT_DEAPRTMENT,
        department
    }
}

export const actUpdateDepartmentRequest = (department) => {
    return dispatch => {
        return callApi(`department/${department.Id}`, 'PUT', department).then(res => {
            dispatch(actUpdateDepartment(res.data.department));
        });
    }
}

export const actUpdateDepartment = (department) => {
    return {
        type : Types.UPDATE_DEAPRTMENT,
        department
    }
}

// filter 
export const onFilterDepartment = (title) => {
    return dispatch => {
        return callApi(`department/find?Title=${title}`, 'GET',null
          ).then(res =>{
              let data = [];
                res.data.Department.rows.forEach(item => {
                    data.push(item);
                });
                dispatch(actFilterDepartment(data));
        })
    }
}

export const actFilterDepartment = (department) => {
    return {
        type : Types.FILTER_DEPARTMENT,
        department
    }
}
