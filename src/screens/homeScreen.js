import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = props => {
    return (
        <View>
            <Text>Oi eu sou a home</Text>
            <Button
                title="Ir para o perfil"
                onPress={() => props.navigation.navigate('Perfil')}
            />
        </View>
    )
};

export default HomeScreen;