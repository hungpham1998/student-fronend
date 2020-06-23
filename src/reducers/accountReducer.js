import * as Types from './../constants/ActionTypes';
var accountState = [];

var findIndex = (account, id) => {
    var result = -1;
    account.forEach((account, index) => {
        if (account.Id === id) {
            result = index;
        }
    });
    return result;
}

const account = (state = accountState, action) => {
    var index = -1;
    var { id,  } = action;
    switch (action.type) {
        case Types.FETCH_ACCOUNT:
            state = action.account;
            return [...state];
        // case Types.DELETE_DEAPRTMENT:
        //     index = findIndex(state, id);
        //     state.splice(index, 1);
        //     return [...state];
        case Types.ADD_ACCOUNT:
            state=action.account;
            return [...state];
        // case Types.UPDATE_DEAPRTMENT:
        //     state= action.department;
        //     return [...state];
        // case Types.FILTER_DEPARTMENT:
        //     state = action.department;
        //     return [...state];
        default: return [...state];
    }
};

export default account;
