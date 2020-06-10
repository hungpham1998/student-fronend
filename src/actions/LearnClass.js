import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchLearnclassRequest = () => {
    return dispatch => {
        return  callApi('learnclass', 'GET', null).then(res => {
            let data = [];
            res.data.learnclass.rows.forEach(item => {
                data.push(item);
            });
            dispatch(actFetchLearnclass(data));
        });
    };
}

export const actFetchLearnclass =  (learnclass) => {
    return {
        type : Types.FETCH_LEARNCLASS,
        learnclass
    }
}

export const actDeleteLearnclassRequest = (id) => {
    return dispatch => {
        return callApi(`learnclass/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteLearnclass(id));
        })
    }
}

export const actDeleteLearnclass = (id) => {
    return {
        type : Types.DELETE_LEARNCLASS,
        id
    }
}

export const actAddLearnclassRequest = (learnclass) => {
    return dispatch => {
        return callApi('learnclass', 'POST', learnclass).then(res => {
            dispatch(actAddLearnclass(res.data));
        });
    }
}

export const actAddLearnclass = (learnclass) => {
    return {
        type : Types.ADD_LEARNCLASS,
        learnclass
    }
}

export const actGetLearnclassRequest = (id) => {
    return dispatch => {
        return callApi(`learnclass/${id}`, 'GET', null).then(res => {
            dispatch(actGetLearnclass(res.data));
        });
    }
}

export const actGetLearnclass = (learnclass) => {
    return {
        type : Types.EDIT_LEARNCLASS,
        learnclass
    }
}

export const actUpdateLearnclassRequest = (learnclass) => {
    return dispatch => {
        return callApi(`learnclass/${learnclass.Id}`, 'PUT', learnclass).then(res => {
            console.log(res)
            dispatch(actUpdateLearnclass(res.data.learnclass));
        });
    }
}

export const actUpdateLearnclass = (learnclass) => {
    return {
        type : Types.UPDATE_LEARNCLASS,
        learnclass
    }
}

// filter 
export const onFilterLearnclass = (title) => {
    return dispatch => {
        return callApi(`learnclass/find?Title=${title}`, 'GET',null
          ).then(res =>{
              let data = [];
                res.data.Learnclass.rows.forEach(item => {
                    data.push(item);
                });
                dispatch(actFilterLearnclass(data));
        })
    }
}

export const actFilterLearnclass = (learnclass) => {
    return {
        type : Types.FILTER_LEARNCLASS,
        learnclass
    }
}
