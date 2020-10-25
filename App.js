// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { TextInput, Switch } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from './app/components/AppText'
import Screen from './app/components/Screen'

import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'

const categories = [
  {
    label: 'Furniture',
    value: 1
  },{
    label: 'Clothing',
    value: 2
  },{
    label: 'Cameras',
    value: 3
  }
]

export default function App() {
  const [category, setCategory] = useState(categories[0])
  return (
    <Screen>
      <AppPicker 
        selectedItem={category}
        onSelectItem={item => setCategory(item) }
        placeholder='Category' 
        icon='apps'
        items={categories}
      />
      <AppTextInput
        placeholder='Email'
        icon='email'
      />
    </Screen>
  )
}