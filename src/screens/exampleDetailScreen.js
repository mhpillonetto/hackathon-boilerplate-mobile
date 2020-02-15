import React from 'react';
import { View, Text, Button } from 'react-native';
import { ScreenView } from '../components';

const ExampleDetailScreen = props => {
    return (
        <ScreenView>
            <Text>Oi eu sou a tela de detalhe</Text>
            <Button
                title="Go to Example"
                onPress={() => props.navigation.navigate('Example')}
            />
        </ScreenView>
    )

}
export default ExampleDetailScreen;