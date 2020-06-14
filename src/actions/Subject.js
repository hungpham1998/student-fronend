import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchSubjectRequest = () => {
    return dispatch => {
        return  callApi('subject', 'GET', null).then(res => {
            let data = [];
            res.data.subject.rows.map(item => {
                data.push(item);
            });
            dispatch(actFetchSubject(data));
        });
    };
}

export const actFetchSubject =  (subject) => {
    return {
        type : Types.FETCH_SUBJECT,
        subject
    }
}

export const actDeleteSubjectRequest = (id) => {
    return dispatch => {
        return callApi(`subject/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteSubject(id));
        })
    }
}

export const actDeleteSubject = (id) => {
    return {
        type : Types.DELETE_SUBJECT,
        id
    }
}

export const actAddSubjectRequest = (subject) => {
    return dispatch => {
        return callApi('subject', 'POST', subject).then(res => {
            dispatch(actAddSubject(res.data.subject));
        });
    }
}

export const actAddSubject = (subject) => {
    return {
        type : Types.ADD_SUBJECT,
        subject
    }
}

export const actGetSubjectRequest = (id) => {
    return dispatch => {
        return callApi(`subject/${id}`, 'GET', null).then(res => {
            console.log(res.data);
            dispatch(actGetSubject(res.data));
        });
    }
}

export const actGetSubject = (subject) => {
    return {
        type : Types.EDIT_SUBJECT,
        subject
    }
}

export const actUpdateSubjectRequest = (subject) => {
    return dispatch => {
        return callApi(`subject/${subject.Id}`, 'PUT', subject).then(res => {
            dispatch(actUpdateSubject(res.data.subject));
        });
    }
}

export const actUpdateSubject = (subject) => {
    return {
        type : Types.UPDATE_SUBJECT,
        subject
    }
}

// filter 
export const onFilterSubject = (title) => {
    return dispatch => {
        return callApi(`subject/find?Title=${title}`, 'GET',null
          ).then(res =>{
              let data = [];
              console.log(res.data)
                res.data.Subject.rows.map(item => {
                    data.push(item);
                });
                dispatch(actFilterSubject(data));
        })
    }
}

export const actFilterSubject = (subject) => {
    return {
        type : Types.FILTER_SUBJECT,
        subject
    }
}
