import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchPositionRequest = () => {
    return dispatch => {
        return  callApi('position', 'GET', null).then(res => {
            let data = [];
            res.data.position.map(item => {
                data.push(item);
            });
            dispatch(actFetchPosition(data));
        });
    };
}

export const actFetchPosition =  (position) => {
    return {
        type : Types.FETCH_POSITION,
        position
    }
}

export const actDeletePositionRequest = (id) => {
    return dispatch => {
        return callApi(`position/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeletePosition(id));
        })
    }
}

export const actDeletePosition = (id) => {
    return {
        type : Types.DELETE_POSITION,
        id
    }
}

export const actAddPositionRequest = (position) => {
    return dispatch => {
        return callApi('position', 'POST', position).then(res => {
            let data = [];
            res.data.position.map((item) => {
                data.push(item)
            })
            dispatch(actAddPosition(data));
        });
    }
}

export const actAddPosition = (position) => {
    return {
        type : Types.ADD_POSITION,
        position
    }
}

export const actGetPositionRequest = (id) => {
    return dispatch => {
        return callApi(`position/${id}`, 'GET', null).then(res => {
            dispatch(actGetPosition(res.data));
        });
    }
}

export const actGetPosition = (position) => {
    return {
        type : Types.EDIT_POSITION,
        position
    }
}

export const actUpdatePositionRequest = (position) => {
    return dispatch => {
        return callApi(`position/${position.Id}`, 'PUT', position).then(res => {
            dispatch(actUpdatePosition(res.data.position));
        });
    }
}

export const actUpdatePosition= (position) => {
    return {
        type : Types.UPDATE_POSITION,
        position
    }
}

// filter 
export const onFilterPosition = (title) => {
    return dispatch => {
        return callApi(`position/find?Title=${title}`, 'GET',null
          ).then(res =>{
              let data = [];
                res.data.position.rows.map(item => {
                    data.push(item);
                });
                dispatch(actFilterPosition(data));
        })
    }
}

export const actFilterPosition = (position) => {
    return {
        type : Types.FILTER_POSITION,
        position
    }
}
