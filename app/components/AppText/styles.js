import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
    text : {
        fontSize: 40,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        color: 'tomato'
    }
})

export default styles