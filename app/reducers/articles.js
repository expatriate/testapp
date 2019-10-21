import * as types from '../actionTypes.js';

let initialState = { 
    data: {},
    educations: [],
    careers: [],
    services: [],
    usertags: [],
};

export default articles = (state = initialState, action) => {
    switch (action.type) {
        case types.PROFILE_USER_DATA_RECIEVED:
            return {
                ...state,
                data: {
                    ...action.data
                }
            }
        break;
        default:
            return state
    }
}