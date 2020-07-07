import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';
import setAuthToken from '../constants/setAuthToken';
import jwt_decode from 'jwt-decode';


export const loginUser = (user) => {
    return dispatch => {
        return callApi('auth/signin', 'POST', user)
            .then(res => {
            const  token  = res.data.accessToken;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch({
                    type: Types.GET_ERRORS,
                    payload: err
                });
             });
    };
}

export const setCurrentUser = decoded => {
    return {
        type: Types.SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}
