import * as types from '../actionTypes.js';
import axios from 'axios';

import {
    Alert
} from 'react-native';

export const getArticles = (url, update = false) => {
    return dispatch => {
        try {
            axios.get(url).then(result => {
                if (result.data && result.data.feed && Array.isArray(result.data.feed.article)) {

                    if (update) {
                        // if user needs to add articles data
                        dispatch({
                            type: types.ARTICLES_ADDED, 
                            data: {
                                data: result.data.feed.article,
                                url: url
                            }
                        });
                    } else {
                        // if user only load data
                        dispatch({
                            type: types.ARTICLES_RECIEVED, 
                            data: {
                                data: result.data.feed.article,
                                url: url
                            }
                        });
                    }
                    dispatch({
                        type: types.REDIRECT_DATA_RECIEVED
                    });
                }
            }).catch(function (error) {
                // handle error
                Alert.alert('Error', `Something wrong with your URL: ${error.message}`);
            });
        } catch (e) {
            // handle error
            Alert.alert('Error', `Something wrong with your URL: ${e}`);
            throw(e)
        }
    }
}

export const setVisited = (id) => {
    return dispatch => {
        dispatch({
            type: types.ARTICLE_VISITED, 
            data: id
        });
    }
}