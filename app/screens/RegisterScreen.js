import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(8).label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

export default function RegisterScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: '', email: '', password: ''}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='default'
                    name='name'
                    textContentType='name'
                    icon='account'
                    placeholder='Name'
                />
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    name='email'
                    textContentType='emailAddress'
                    icon='email'
                    placeholder='Email'
                />
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    name='password'
                    placeholder='Password'
                    secureTextEntry={true}
                    textContentType='newPassword' // only on iOS, uses keychain
                />
                <SubmitButton title='Register' />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
