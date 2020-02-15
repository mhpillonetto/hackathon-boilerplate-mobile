import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

const SimpleTextInput = props => {
    return(
        <View style={styles.containter}>
            <Text style={styles.title}>{props.title}</Text>
            {/* implementar icone na barra */}
            {/* implementar texto escondido */}
            <TextInput style={styles.input}/>
        </View>
    )
}

export default SimpleTextInput;

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    input: {
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        paddingLeft: 10,
        backgroundColor: "#E5E5E5"
    },
    title:{
        fontWeight:"bold",
        fontSize:20
    }
})