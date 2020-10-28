import React from 'react'
import colors from '../config/colors'
import { View, StyleSheet, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import AppText from './AppText'

export default function Card({ title, subTitle, image, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={image} />
                <View style={styles.container}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        marginBottom: 20,
        backgroundColor: colors.white,
        overflow: 'hidden'
    },
    container: {
        backgroundColor: colors.white,
        padding: 20
    },
    image: {
        width: '100%',
        height: 200,
        // borderTopLeftRadius: 15,
        // borderTopLeftRadius: 15
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    },
    title: {
        marginBottom: 7
    }
})