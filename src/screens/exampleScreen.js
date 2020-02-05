import React from 'react';
import { View, Text, Button } from 'react-native';


const ExampleScreen = () => {
    return (
        <View>
            <Text>Oi eu sou a tela de exemplo</Text>
            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Details')}
            />
        </View>
    )

}
export default ExampleScreen;