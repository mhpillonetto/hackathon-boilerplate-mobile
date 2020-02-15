import React from 'react';
import {View} from 'react-native';

const ScreenView = props => {
    return(
        <View style={{margin:30}}>
            {props.children}
        </View>
    )
};

export default ScreenView;