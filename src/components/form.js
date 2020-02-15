import React from 'react';
import { View, TextInput, Button, StyleSheet, ActivityIndicator, Text } from 'react-native';
import * as Yup from 'yup';


import { withFormik } from 'formik';

const Form = (props) => (
    console.log(props),
    <View style={styles.container}>
        <TextInput
            value={props.values.email}
            onChangeText={text => props.setFieldValue('email', text)}
        />

        <TextInput
            value={props.values.password}
            onChangeText={text => props.setFieldValue('password', text)}
        />

        <Button
            onPress={props.handleSubmit}
            title="Login"
        />

        {props.isSubmitting && <ActivityIndicator />}
        {
            props.touched.email
            && props.errors.email
            && <Text>{props.errors.email}</Text>
        }

    </View>
);

export default withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Digite um e-mail válido')
            .required('Preencha o campo de e-mail'),
        password: Yup.string()
            .min(6, 'A senha deve ter no mínimo 6 caracteres')
            .required('Preencha o campo de senha'),
    }),

    handleSubmit: (values) => {
        console.log(values);
    }
})(Form);


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray'
    }
})