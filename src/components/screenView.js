import React from 'react';
import {View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreenView = props => {
    return(
        <SafeAreaView style={{marginHorizontal:60, marginTop: 60, flex:1}}>
            {props.children}
        </SafeAreaView>
    )
};

export default ScreenView;