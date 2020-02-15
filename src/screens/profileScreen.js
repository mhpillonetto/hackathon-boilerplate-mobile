import React from 'react';
import { View, Text } from 'react-native';
import { ScreenView, SimpleTextInput } from '../components';

const ProfileScreen = () => {
    return (
        <ScreenView>
            <Text>Oi eu sou a tela de perfil</Text>
            <SimpleTextInput title={"sou um input"}/>
        </ScreenView>
    )

}

export default ProfileScreen;
