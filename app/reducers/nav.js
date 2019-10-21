import { NavigationActions } from 'react-navigation';
import RootNavigator from '../navigators/AppNavigator';
import * as types from '../actionTypes.js';

const initialState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('Main'));
//const initialState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('Login'));
export default nav = (state = initialState, action) => {
  let nextState;
  switch(action.type) {
    case types.REDIRECT_LOGGED_IN:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' })
      );
      break;
    case types.REDIRECT_LOGIN:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' })
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
    break;
  }
  return nextState || state;
};
