// purely navigational so not in components folder
import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


import defaultStyles from '../config/styles'

export default function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons 
                    name={'plus-circle'} 
                    size={40} 
                    color={defaultStyles.colors.white}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        borderColor: defaultStyles.colors.white,
        borderRadius: 40,
        borderWidth: 10,
        bottom: 20,
        height: 80,
        justifyContent: 'center',
        width: 80
    }
})