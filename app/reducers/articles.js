import * as types from '../actionTypes.js';

let initialState = {
    list: [],
    url: ''
};

export default articles = (state = initialState, action) => {
    switch (action.type) {
        case types.ARTICLES_RECIEVED:
            return {
                ...state,
                list: action.data.data.map((item, index) => {
                    return {
                        ...item,
                        id: index,
                        date: new Date(item.date).getTime()
                    }
                }).sort(function(a, b) {
                    return a.date - b.date
                }),
                url: action.data.url
            }
        break;
        case types.ARTICLES_ADDED:
            return {
                ...state,
                list: [
                    ...state.list,
                    ...action.data.data.map((item, index) => {
                        return {
                            ...item,
                            id: index,
                            date: item.date ? new Date(item.date).getTime() : new Date().getTime()
                        }
                    })
                ].sort(function(a, b) {
                    return a.date - b.date
                }),
                url: action.data.url
            }
        break;
        default:
            return state
    }
}