import * as types from '../actionTypes.js';

let initialState = {
    list: [{
        id: 0,
        name: 'test'
    },{
        id: 1,
        name: 'test'
    },{
        id: 2,
        name: 'test'
    },{
        id: 3,
        name: 'test'
    }],
    page: 0,
    offset: 0,
    loading: true
};

export default articles = (state = initialState, action) => {
    switch (action.type) {
        case types.ARTICLES_RECIEVED:
            return {
                ...state,
                list: action.data.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
                })
            }
        break;
        default:
            return state
    }
}