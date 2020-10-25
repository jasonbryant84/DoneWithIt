import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView } from 'react-native'


function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    );
}

export default Screen;

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }
})