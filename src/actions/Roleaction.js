import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchRoleRequest = () => {
    return dispatch => {
        return  callApi('role', 'GET', null).then(res => {
            let data = [];
            res.data.role.forEach(item => {
                data.push(item);
            });
            dispatch(actFetchRole(data));
        });
    };
}

export const actFetchRole =  (role) => {
    return {
        type : Types.FETCH_ROLE,
        role
    }
}
