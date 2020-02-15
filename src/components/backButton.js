import React from 'react';
import {View, TouchableOpacity} from 'react-native';

export const BackButton = props => {
    return(
        <View>
            <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                Voltar
            </TouchableOpacity>
        </View>
    )
}