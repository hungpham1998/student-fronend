import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchLearnyearRequest =  () => {
    return dispatch => {
        return  callApi('learnyear', 'GET', null).then(res => {
            let data = [];
            res.data.learnYear.rows.forEach(item => {
                data.push(item);
            });
            dispatch(actFetchLearnyear(data));
        });
    };
}

export const actFetchLearnyear =  (learnyear) => {
    return {
        type : Types.FETCH_LEARNYEAR,
        learnyear
    }
}

export const actDeleteLearnyearRequest = (id) => {
    return dispatch => {
        return callApi(`learnyear/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteLearnyear(id));
        })
    }
}

export const actDeleteLearnyear = (id) => {
    return {
        type : Types.DELETE_LEARNYEAR,
        id
    }
}

export const actAddLearnyearRequest = (learnyear) => {
    return dispatch => {
        return callApi('learnyear', 'POST', learnyear).then(res => {
            let data = [];
            // console.log(res.data.learnyear)
            res.data.learnyear.map((item) => {
                data.push(item)
            })
            dispatch(actAddLearnyear(data));
        });
    }
}

export const actAddLearnyear = (learnyear) => {
    return {
        type : Types.ADD_LEARNYEAR,
        learnyear
    }
}

export const actGetLearnyearRequest = (id) => {
    return dispatch => {
        return callApi(`learnyear/${id}`, 'GET', null).then(res => {
            console.log(res.data);
            dispatch(actGetLearnyear(res.data));
        });
    }
}

export const actGetLearnyear = (learnyear) => {
    return {
        type : Types.EDIT_LEARNYEAR,
        learnyear
    }
}

export const actUpdateLearnyearRequest = (learnyear) => {
    return dispatch => {
        return callApi(`learnyear/${learnyear.Id}`, 'PUT', learnyear).then(res => {
            dispatch(actUpdateLearnyear(res.data.learnyear));
        });
    }
}

export const actUpdateLearnyear = (learnyear) => {
    return {
        type : Types.UPDATE_LEARNYEAR,
        learnyear
    }
}

// filter 
export const onFilterLearnyear = (title) => {
    return dispatch => {
        return callApi(`learnyear/find?Title=${title}`, 'GET',null
          ).then(res =>{
              let data = [];
              console.log(res.data)
                res.data.Learnyear.rows.map(item => {
                    data.push(item);
                });
                dispatch(actFilterLearnyear(data));
        })
    }
}

export const actFilterLearnyear = (learnyear) => {
    return {
        type : Types.FILTER_LEARNYEAR,
        learnyear
    }
}
