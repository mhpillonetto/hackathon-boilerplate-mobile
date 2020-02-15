import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

const SimpleTextInput = props => {
    return(
        <View style={styles.containter}>
            <Text>{props.title}</Text>
            <TextInput stylre={styles.input}/>
        </View>
    )
}

export default SimpleTextInput;

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
    },
    input: {
        height: 40,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1
    }
})