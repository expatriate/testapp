import * as types from '../actionTypes.js';

let initialState = {
    list: [],
    url: ''
};

const regex = /(<([^>]+)>)/ig;

export default articles = (state = initialState, action) => {
    switch (action.type) {
        case types.ARTICLES_RECIEVED:

            return {
                ...state,
                list: action.data.data.map((item, index) => {
                    return {
                        ...item,
                        id: `${index}_${new Date().getTime()}`,
                        date: item.date ? new Date(item.date).getTime() : new Date().getTime(),
                        shortDescription: item.shortDescription.replace(regex, ''),
                        title: item.title.replace(regex, ''),
                        description: item.description.replace(regex, ''),
                        visited: false
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
                            id: `${index}_${new Date().getTime()}`,
                            date: item.date ? new Date(item.date).getTime() : new Date().getTime(),
                            shortDescription: item.shortDescription.replace(regex, ''),
                            title: item.title.replace(regex, ''),
                            description: item.description.replace(regex, ''),
                            visited: false
                        }
                    })
                ].sort(function(a, b) {
                    return a.date - b.date
                }),
                url: action.data.url
            }
        break;
        case types.ARTICLE_VISITED:
            return {
                ...state,
                list: state.list.map((item) => {
                    if (item.id === action.data) {
                        return {
                            ...item,
                            visited: true
                        }
                    }
                    return item
                })
            }
        break;
        default:
            return state
    }
}