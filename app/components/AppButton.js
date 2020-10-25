import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import colors from '../config/colors'

export default function AppButton({ title, color }) {
    const onPress = () => {
        console.log('tapped that ass')
    }
    return (
        <TouchableOpacity 
            style={[styles.button, { backgroundColor: colors[color] }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor: true === 'Login' ? colors.primary : colors.secondary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10
    },
    text: {
        fontSize: 18,
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})
