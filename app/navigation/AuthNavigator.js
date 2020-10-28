import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { LoginScreen, RegisterScreen, WelcomeScreen } from '../screens'

const Stack = createStackNavigator()

export default AuthNavigator = ({ route }) => (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
)

