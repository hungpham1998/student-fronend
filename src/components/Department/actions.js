import TYPES from '../../constants/actionType';
import api from '../../axios/axios';
import axios from 'axios';


export const addDepartment = (department = {
    Title: '',
    Note: '',
    Idpartment: ''
}) => {
    return (dispatch) => {
        const book = {
            Title: department.Title,
            Note: department.Note,
            Idpartment: department.Idpartment
        };

        return axios.post(api.baseURL+ 'department/create', book).then(result => {
            dispatch({
                type:TYPES.INSERT_DEPARTMENT,
                payload: result.data
            });
        });
    };
};


export const deleteDepartment = ( id) => {
    return (dispatch) => {
        return axios.delete(api.baseURL + `department/${id}`)
            .then(() => {
                getDepartment()
                dispatch({
                    type: TYPES.DELETE_DEPARTMENT,
                    payload:id
                });
            })
            .catch((err) => {
                    dispatch({
                        type: TYPES.DELETE_DEPARTMENT_FAILURE,
                    });
            })
        
    }
};



export const editDepartment = (id, updates) => {
    return (dispatch) => {
        return axios.put(api.baseURL + `department/${id}`, updates).then(() => {

            dispatch({
                type:TYPES.UPDATE_DEPARTMENT,
                id,
                updates
            });
        });
    }
};


export const getDepartment = () => {
    return (dispatch) => {
        return axios.get(api.baseURL + 'department').then(result => {
            
            const newDepartment = [];
            if (result.data.department.length === 0) {
                dispatch({
                    type: TYPES.GET_DEPARTMENT_FAILURE,
                });
            }
            else {
               result.data.department.rows.forEach(item => {
                    newDepartment.push(item);
                 });
                dispatch({
                    type: TYPES.GET_DEPARTMENT,
                    payload:  newDepartment
                });
            }

        });
    };
};
