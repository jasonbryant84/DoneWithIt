import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { useNetInfo } from "@react-native-community/netinfo"

import defaultStyles from '../config/styles'
import Text from './AppText'

export default function OfflineNotice(props) {
    const netInfo = useNetInfo()
    
    if(netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)    
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No Internet Connection</Text>
            </View>
        )
    
    return null
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        height: 50,
        justifyContent: 'center',
        position: 'absolute',
        top: Constants.statusBarHeight,
        zIndex: 1,
        width: '100%',
    }, 
    text: {
        color: defaultStyles.colors.white,
    }
})