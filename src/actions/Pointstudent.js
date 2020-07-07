import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchPointstudentRequest = () => {
    return dispatch => {
        return  callApi('pointstudent', 'GET', null).then(res => {
            let data = [];
            if (res.data.pointstudent) {
                res.data.pointstudent.forEach(item => {
                    data.push(item);
                });
                dispatch(actFetchPointstudent(data));
            }
            else {
                dispatch(actFetchPointstudent(data));
            }
        });
    };
}

export const actFetchPointstudent =  (pointstudent) => {
    return {
        type : Types.FETCH_POINTSTUDENT,
        pointstudent
    }
}

export const actDeletePointstudentRequest = (id) => {
    return dispatch => {
        return callApi(`pointstudent/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeletePointstudent(id));
        })
    }
}

export const actDeletePointstudent = (id) => {
    return {
        type : Types.DELETE_POINTSTUDENT,
        id
    }
}

export const actAddPointstudentRequest = (pointstudent) => {
    return dispatch => {
        return callApi('pointstudent', 'POST', pointstudent).then(res => {
            console.log(res.data)
            let data = [];
            res.data.Pointstudent.forEach((item) => {
                data.push(item)
            })
            dispatch(actAddPointstudent(data));
        });
    }
}

export const actAddPointstudent = (pointstudent) => {
    return {
        type : Types.ADD_POINTSTUDENT,
        pointstudent
    }
}

export const actGetPointstudentRequest = (id) => {
    return dispatch => {
        return callApi(`pointstudent/${id}`, 'GET', null).then(res => {
            dispatch(actGetPointstudent(res.data));
        });
    }
}

export const actGetPointstudent = (pointstudent) => {
    return {
        type : Types.EDIT_POINTSTUDENT,
        pointstudent
    }
}

export const actUpdatePointstudentRequest = (pointstudent) => {
    return dispatch => {
        return callApi(`pointstudent/${pointstudent.Id}`, 'PUT', pointstudent).then(res => {
            dispatch(actUpdatePointstudent(res.data.pointstudent));
        });
    }
}

export const actUpdatePointstudent = (pointstudent) => {
    return {
        type : Types.UPDATE_POINTSTUDENT,
        pointstudent
    }
}

// // filter 
// export const onFilterpointstudent = (title) => {
//     return dispatch => {
//         return callApi(`pointstudent/find?Title=${title}`, 'GET',null
//           ).then(res =>{
//               let data = [];
//                 res.data.pointstudent.rows.forEach(item => {
//                     data.push(item);
//                 });
//                 dispatch(actFilterpointstudent(data));
//         })
//     }
// }

// export const actFilterpointstudent = (pointstudent) => {
//     return {
//         type : Types.FILTER_POINTSTUDENT,
//         pointstudent
//     }
// }
