import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialButton, ScreenView, SimpleTextInput } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';


const LoginScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.logoView}>
                <Image source={require('../assets/img/mtg_logo_new.png')} style={styles.logo} />
            </View>
            <View style={styles.inputs}>
                <SimpleTextInput title={"Login"} />
                <SimpleTextInput title={"Senha"} />
                <MaterialButton text="ENTRAR" onPress={() => props.navigation.navigate("Main Tab Stack")} />
                <TouchableOpacity onPress={()=>props.navigation.navigate("Forgot Password")}>
                    <Text>Esqueci minha senha</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Register")}>
                    <Text>
                        <Text style={{ fontWeight: "bold" }}>Não possui conta?</Text>
                        Entre aqui
                        </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        marginHorizontal: 50,
        flex: .6,
        display: "flex",
        justifyContent: "center"
    },
    inputs: {
        flexGrow: 1,
        // flex: 1,
        display: "flex",
        justifyContent: "space-evenly",

    },
    logoView: {
        flexGrow: 1,
        justifyContent: "center"
    },
    logo: {
        width: "100%",
        height: 100
    }
})

export default LoginScreen;