import React from 'react';
import { View, Text, Button } from 'react-native';

const ExampleDetailScreen = props => {
    return (
        <View>
            <Text>Oi eu sou a tela de detalhe</Text>
            <Button
                title="Go to Example"
                onPress={() => props.navigation.navigate('Example')}
            />
        </View>
    )

}
export default ExampleDetailScreen;