import * as types from '../actionTypes.js';
import axios from 'axios';

import {
    Alert
} from 'react-native';

export const getArticles = (url) => {
    return dispatch => {
        try {
            axios.get(url).then(result => {
                if (result.data && result.data.feed && Array.isArray(result.data.feed.article)) {
                    dispatch({
                        type: types.ARTICLES_RECIEVED, 
                        data: result.data.feed.article,
                    });
                    dispatch({
                        type: types.REDIRECT_DATA_RECIEVED
                    });
                } else {
                    dispatch({
                        type: types.ARTICLES_RECIEVED, 
                        data: []
                    });
                }
            }).catch(function (error) {
                // handle error
                Alert.alert('Error', `Something wrong with your URL: ${error.message}`);
            });
        } catch (e) {
            // handle error
            Alert.alert('Error', `Something wrong with your URL: ${e}`);
            dispatch({
                type: types.ARTICLES_RECIEVED, 
                data: []
            });
            throw(e)
        }
    }
}