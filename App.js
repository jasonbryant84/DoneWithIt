import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AppNavigator, AuthNavigator, navigationTheme } from './app/navigation'

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator /> 
    </NavigationContainer>
  )
}