import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchSpecailizedRequest = () => {
    return dispatch => {
        return  callApi('specailized', 'GET', null).then(res => {
            let data = [];
            res.data.specailized.map(item => {
                data.push(item);
            });
            dispatch(actFetchSpecailized(data));
        });
    };
}

export const actFetchSpecailized =  (specailized) => {
    return {
        type : Types.FETCH_SPECAILIZED,
        specailized
    }
}

export const actDeleteSpecailizedRequest = (id) => {
    return dispatch => {
        return callApi(`specailized/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteSpecailized(id));
        })
    }
}

export const actDeleteSpecailized = (id) => {
    return {
        type : Types.DELETE_SPECAILIZED,
        id
    }
}

export const actAddSpecailizedRequest = (specailized) => {
    return dispatch => {
        return callApi('specailized', 'POST', specailized).then(res => {
            let data = [];
            res.data.specailized.forEach((item) => {
                data.push(item);
            })
            dispatch(actAddSpecailized(data));
        });
    }
}

export const actAddSpecailized = (specailized) => {
    return {
        type : Types.ADD_SPECAILIZED,
        specailized
    }
}

export const actGetSpecailizedRequest = (id) => {
    return dispatch => {
        return callApi(`specailized/${id}`, 'GET', null).then(res => {
            dispatch(actGetSpecailized(res.data));
        });
    }
}

export const actGetSpecailized = (specailized) => {
    return {
        type : Types.EDIT_SPECAILIZED,
        specailized
    }
}

export const actUpdateSpecailizedRequest = (specailized) => {
    return dispatch => {
        return callApi(`specailized/${specailized.Id}`, 'PUT', specailized).then(res => {
            dispatch(actUpdateSpecailized(res.data.specailized));
        });
    }
}

export const actUpdateSpecailized = (specailized) => {
    return {
        type : Types.UPDATE_SPECAILIZED,
        specailized
    }
}

// filter 
export const onFilterSpecailized = (title) => {
    return dispatch => {
        return callApi(`specailized/find?Title=${title}`, 'GET',null
          ).then(res =>{
              let data = [];
                res.data.Specailized.rows.forEach(item => {
                    data.push(item);
                });
                dispatch(actFilterSpecailized(data));
        })
    }
}

export const actFilterSpecailized = (specailized) => {
    return {
        type : Types.FETCH_SPECAILIZED,
        specailized
    }
}
