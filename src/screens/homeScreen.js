import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { ScreenView, SimpleTextInput, MaterialButton } from '../components';

const HomeScreen = props => {
    return (
        <ScreenView>
            <View style={{display: "flex", justifyContent: "space-evenly", flex:.5 }}>
                <SimpleTextInput />
                <MaterialButton text={"busca avançada"} onPress={()=>props.navigation.navigate("Advanced Search")}/>
            </View>

        </ScreenView>
    )
};

const styles = StyleSheet.create({
})

export default HomeScreen;