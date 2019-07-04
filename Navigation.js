import React from 'react'
import {createStackNavigator} from "react-navigation";
import PostListScreen from './Root/Screens/PostListScreen'
import SplshScreen from "./Root/Screens/SplashScreen";
import AddPostScreen from "./Root/Screens/AddPostScreen";
import LoginScreen from "./Root/Screens/LoginScreen";
import SignupScreen from "./Root/Screens/SignupScreen";
import {fromRight} from '././navigation_transitions'

console.disableYellowBox = true;

const StackScreen = createStackNavigator({
    SplshScreen: {
        screen: SplshScreen,
        navigationOptions: () => ({
            header: null
        })
    },
    PostListScreen: {
        screen: PostListScreen,

    },
    AddPostScreen: {screen: AddPostScreen},
    LoginScreen: {
        screen: LoginScreen, navigationOptions: () => ({
            header: null
        })
    }, SignupScreen: {
        screen: SignupScreen, navigationOptions: () => ({
            header: null
        })
    },
}, {transitionConfig: (nav) => fromRight()});

export default StackScreen;
