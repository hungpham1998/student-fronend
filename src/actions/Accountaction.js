import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchAccountRequest = () => {
    return dispatch => {
        return  callApi('account', 'GET', null).then(res => {
            let data = [];
            res.data.account.forEach(item => {
                data.push(item);
            });
            dispatch(actFetchAccount(data));
        });
    };
}

export const actFetchAccount =  (account) => {
    return {
        type : Types.FETCH_ACCOUNT,
        account
    }
}



export const actAddAccountRequest = (account) => {
    return dispatch => {
        return callApi('account', 'POST', account).then(res => {
            let data = [];
            res.data.user.forEach((item) => {
                data.push(item)
            })
            dispatch(actAddAccount(data));
        });
    }
}

export const actAddAccount = (account) => {
    return {
        type : Types.ADD_ACCOUNT,
        account
    }
}

export const actDeleteAccountRequest = (id) => {
    return dispatch => {
        return callApi(`account/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteAccount(id));
        })
    }
}

export const actDeleteAccount = (id) => {
    return {
        type : Types.DELETE_ACCOUNT,
        id
    }
}
