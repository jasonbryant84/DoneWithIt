import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import authApi from '../api/auth'
import Screen from '../components/Screen'
import useApi from '../hooks/useApi'
import useAuth from '../auth/useAuth'
import usersApi from '../api/users'
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms'
import { useAppState } from '@react-native-community/hooks'
import ActivityIndicator from '../components/ActivityIndicator'
import { disableExpoCliLogging } from 'expo/build/logs/Logs'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(8).label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

export default function RegisterScreen() {
    useAppState
    const registerApi = useApi(usersApi.register)
    const loginApi = useApi(authApi.login)
    const auth = useAuth()
    const [error, setError] = useState()
    
    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo)
        console.log('sanity', result.ok)

        if(!result.ok) {
            if(result.data) setError(result.data.error)
            else {
                setError('An unexpected error occured.')
                console.log(result)
            }
            return
        }

        // Now loging with authToken
        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        )
        auth.logIn(authToken)
        
    }

    return (
        <>
            <ActivityIndicator 
                visible={registerApi.loading || loginApi.loading} 
            />
            <Screen style={styles.container}>
                <AppForm
                    initialValues={{ name: '', email: '', password: ''}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} />
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
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
