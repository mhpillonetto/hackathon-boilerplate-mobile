import React from 'react';
import {Button} from 'react-native-material-ui';
import {StyleSheet} from 'react-native';


const MaterialButton = props => {
    return(
        <Button 
            raised primary 
            text={props.text} 
            onPress={props.onPress}
            style={styles.button}
        />
    )
}

const styles = StyleSheet.create({
    button:{
    }
})

export default MaterialButton;