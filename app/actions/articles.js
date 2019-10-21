import * as types from '../actionTypes.js';
import axios from 'axios';

export const getArticles = () => {

    return dispatch => {
        try {
            axios.get(`https://gist.githubusercontent.com/happy-thorny/bd038afd981be300ac2ed6e5a8ad9f3c/raw/dd90f04475a2a7c1110151aacc498eabe683dfe4/memes.json`).then(result => {
                console.warn(JSON.stringify(Array.isArray(result.data.feed.article), 0 , 2))
                if (result.data && result.data.feed && Array.isArray(result.data.feed.article)) {
                    dispatch({
                        type: types.ARTICLES_RECIEVED, 
                        data: result.data.feed.article,
                    });
                } else {
                    dispatch({
                        type: types.ARTICLES_RECIEVED, 
                        data: []
                    });
                }
            })
        } catch (e) {

            dispatch({
                type: types.ARTICLES_RECIEVED, 
                data: []
            });
            throw(e)
        }
    }
}