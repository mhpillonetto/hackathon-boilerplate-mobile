import React from 'react';
import { Text, Button } from 'react-native';

import { Form, ScreenView } from '../components';

const ExampleScreen = () => {
    return (
        <ScreenView>
            <Text>Oi eu sou a tela de exemplo</Text>
            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Details')}
            />
            <Form />
        </ScreenView>
    )

}
export default ExampleScreen;