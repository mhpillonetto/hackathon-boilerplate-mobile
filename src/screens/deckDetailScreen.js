import React from 'react';
import { View } from 'react-native';
import { ScreenView } from '../components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MainDeckScreen from './mainDeckScreen';
import SideboardScreen from './sideboardScreen';


const Tab = createMaterialTopTabNavigator();

const DeckDetailScreen = props => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Main Deck" component={MainDeckScreen} />
            <Tab.Screen name="Sideboard" component={SideboardScreen} />
        </Tab.Navigator>
    )
}

export default DeckDetailScreen;