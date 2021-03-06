import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import {
    Image,
    View,
    Text,
    Alert
} from 'react-native';

import MainPage from '../components/pages/main-page';
import DetailsPage from '../components/pages/details-page';
import SetupSourcePage from '../components/pages/setup-source-page';

export default RootNavigator = createStackNavigator({
    Main: { 
        screen: MainPage,
        navigationOptions: {
            header: null
        },
    },
    Details: {
        screen: DetailsPage,
        navigationOptions: {
            header: null
        },
    },
    SetupSource: {
        screen: SetupSourcePage,
        navigationOptions: {
            header: null
        },
    }
}, {
    initialRouteName: 'Main',
});