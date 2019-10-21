import * as types from '../actionTypes.js';

let initialState = {
    list: [],
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
                        id: index,
                        date: new Date(item.date).getTime()
                    }
                }).sort(function(a, b) {
                    return a.date - b.date
                })
            }
        break;
        default:
            return state
    }
}