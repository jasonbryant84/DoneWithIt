import React, { useState, createRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppLoading } from 'expo'

import AuthContext from './app/auth/context'
import { AppNavigator, AuthNavigator, navigationTheme } from './app/navigation'
import OfflineNotice from './app/components/OfflineNotice'
import authStorage from './app/auth/storage'
import { navigationRef } from './app/navigation/rootNavigation'

import logger from './app/utility/logger'
logger.start()

export default function App() {
  // logger.log(new Error('Error in app'))
  
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if(user) setUser(user)
  }

  if(!isReady) 
    return (
      <AppLoading 
        startAsync={restoreUser} 
        onFinish={() => setIsReady(true)} 
      />
    )

  return (
    <AuthContext.Provider value={{ user, setUser}}>
      <OfflineNotice />
      <NavigationContainer 
        ref={navigationRef} 
        theme={navigationTheme}
      >
        {user ? <AppNavigator/> : <AuthNavigator /> }
      </NavigationContainer>
    </AuthContext.Provider>
  )
}