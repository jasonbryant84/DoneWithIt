import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'


export default function Icon({
    name, 
    size = 40, 
    iconColor = colors.white, 
    backgroundColor = colors.black
}) {
    return (
        <View style={[styles.container, { 
            width: size, 
            height: size, 
            borderRadius: size/2,
            backgroundColor 
        }]}>
            <MaterialCommunityIcons
                name={name}
                size={size * 0.5}
                color={iconColor}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

