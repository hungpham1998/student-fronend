import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchStudentRequest = () => {
    return dispatch => {
        return  callApi('student', 'GET', null).then(res => {
            let newData = [];
            res.data.student.forEach(item => {
                newData.push(item);
            });
            dispatch(actFetchStudent(newData));
        })
    };
}

export const actFetchStudent =  (student) => {
    return {
        type : Types.FETCH_STUDENT,
        student
    }
}

export const actDeleteStudentRequest = (id) => {
    return dispatch => {
        return callApi(`student/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteStudent(id));
        })
    }
}

export const actDeleteStudent = (id) => {
    return {
        type : Types.DELETE_STUDENT,
        id
    }
}

export const actAddStudentRequest = (student) => {
    return dispatch => {
        return callApi('student', 'POST', student).then(res => {
            let data = [];
            res.data.student.forEach((item)=> data.push(item))
            dispatch(actAddStudent(data));
        });
    }
}

export const actAddStudent = (student) => {
    return {
        type : Types.ADD_STUDENT,
        student
    }
}

export const actGetStudentRequest = (id) => {
    return dispatch => {
        return callApi(`student/${id}`, 'GET', null).then(res => {
            dispatch(actGetStudent(res.data));
        });
    }
}

export const actGetStudent = (student) => {
    return {
        type : Types.EDIT_STUDENT,
        student
    }
}

export const actUpdateStudentRequest = (student) => {
    return dispatch => {
        return callApi(`student/${student.Id}`, 'PUT', student).then(res => {
            dispatch(actUpdateStudent(res.data.student));
        });
    }
}

export const actUpdateStudent = (student) => {
    return {
        type : Types.UPDATE_STUDENT,
        student
    }
}

export const actGetExportStudentRequest = (id) => {
    return dispatch => {
        return callApi(`student/${id}/point`, 'GET', null).then(res => {
            dispatch(actGetStudent(res.data));
        });
    }
}


// filter 
// export const onFilterStudent = (title) => {
//     return dispatch => {
//         return callApi(`learnclass/find?Title=${title}`, 'GET',null
//           ).then(res =>{
//               let data = [];
//                 res.data.Learnclass.rows.forEach(item => {
//                     data.push(item);
//                 });
//                 dispatch(actFilterLearnclass(data));
//         })
//     }
// }

// export const actFilterLearnclass = (learnclass) => {
//     return {
//         type : Types.FILTER_LEARNCLASS,
//         learnclass
//     }
// }
