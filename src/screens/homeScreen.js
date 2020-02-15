import React from 'react';
import { View, Text, Button } from 'react-native';
import { ScreenView } from '../components';

const HomeScreen = props => {
    return (
        <ScreenView>
            <Text>Oi eu sou a home</Text>
            <Button
                title="Ir para o perfil"
                onPress={() => props.navigation.navigate('Perfil')}
            />
        </ScreenView>
    )
};

export default HomeScreen;