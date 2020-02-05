import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import {
    HomeScreen,
    ProfileScreen,
    ExampleScreen,
    ExampleDetailScreen
} from './screens';
// import BackButton from './components/BackButton';
// import Colors from './styles/Colors';

const ExampleStack = createStackNavigator({
    Example: ExampleScreen,
    Details: ExampleDetailScreen
});

const HomeStack = createStackNavigator({
    Home: HomeScreen
});

const ProfileStack = createStackNavigator({
    Perfil: ProfileScreen
});

const Router = createAppContainer(  
    createBottomTabNavigator(
        {
            Home: HomeStack,
            Perfil: ProfileStack,
            Exemplo: ExampleStack
        }
    )
);


export default () => (
    <Router />
)

