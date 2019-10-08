import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import LoadingScreen from "../screens/LoadingScreen.js";
import MainScreen from "../screens/MainScreen";
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Home: HomeScreen,
    Main: MainTabNavigator,

  },{
    initialRouteName: 'Main'
  })
  // createStackNavigator(
  // {
  //   Home: HomeScreen,
  //   Login: Login
  // },
  // {
  //   initialRouteName: 'Home'
  // })
);
