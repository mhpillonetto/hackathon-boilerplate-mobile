import React from 'react';
import { View } from 'react-native';
import { MaterialButton } from '../components';

const MyListsScreen = props => {
    return (
        <View>
            <MaterialButton text={"ver deck"} onPress={()=>props.navigation.navigate('List Detail')}/>
        </View>
    )
}

export default MyListsScreen;