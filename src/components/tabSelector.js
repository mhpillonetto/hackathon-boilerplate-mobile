import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialTabs from 'react-native-material-tabs';
import Colors from '../styles/Colors';

export default ({ onChange, selectedIndex, items }) => (
    <MaterialTabs
        items={items}
        selectedIndex={selectedIndex}
        onChange={onChange}
        barColor="white"
        indicatorColor={Colors.azulIPI}
        activeTextColor={Colors.azulIPI}
        inactiveTextColor={Colors.gray}
    />
);