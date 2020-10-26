// import { StatusBar } from 'expo-status-bar';
import React from 'react'

import AppText from './app/components/AppText'
import Screen from './app/components/Screen'

import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import LoginScreen from './app/screens/LoginScreen'
import RegisterScreen from './app/screens/RegisterScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'

export default function App() {
  return (
    <ListingEditScreen />
  )
}