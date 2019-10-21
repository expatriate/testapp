import React from 'react';

//import { createStackNavigator,  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
    Image,
    View,
    Text,
    Alert
} from 'react-native';
import { 
    Colors, 
    Gradients 
} from '../components/styles/colors.js';
import MainPage from '../components/pages/main-page';
import DetailsPage from '../components/pages/details-page';

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
    }
}, {
    initialRouteName: 'Main',
});