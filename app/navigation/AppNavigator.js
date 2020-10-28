import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { ListingEditScreen } from '../screens'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import NewListingButton from './NewListingButton'
import routes from './routes'

const Tab = createBottomTabNavigator()

// Nesting Navigators 
// Can also pass just a screen to the component but maybe not useful in practice)
const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
            name="Feed" 
            component={FeedNavigator} 
            options={{  // object OR function that returns an object
                tabBarIcon: ({ color, size }) => 
                <MaterialCommunityIcons 
                    name={'home'} 
                    size={size} 
                    color={color} 
                />
            }}
        />
        <Tab.Screen 
            name="ListingEdit" 
            component={ListingEditScreen} 
            options={({ navigation }) => ({ 
                tabBarButton: () => 
                    <NewListingButton
                        onPress={()=>navigation.navigate(routes.LISTING_EDIT)}
                    />,
                tabBarIcon: ({ color, size }) => 
                    // params are given by React Navigation 
                    <MaterialCommunityIcons 
                        name={'plus-circle'} 
                        size={size} 
                        color={color} 
                    />
            }) // returning an object not a block of code
        }
        />
        <Tab.Screen 
            name="Account" 
            component={AccountNavigator} 
            options={{ tabBarIcon: ({ color, size }) => 
            // params are given by React Navigation 
            <MaterialCommunityIcons 
                name={'account'} 
                size={size} 
                color={color} 
            />
        }}
        />
    </Tab.Navigator>
)

export default AppNavigator