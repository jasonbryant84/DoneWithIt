import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import AppText from './AppText'

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions, style }) {
    return (
        <Swipeable 
            renderRightActions={renderRightActions}
        >
            <TouchableHighlight 
                onPress={onPress}
                underlayColor={colors.light}
            >
                <View style={[styles.container, style]}>
                    { IconComponent }
                    { image && <Image style={styles.image} source={image} />}
                    <View style={styles.wrapper}>
                        <AppText style={styles.title}>{title}</AppText>
                        { subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText> }
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: '500'
    },
    wrapper: {
        justifyContent: 'center',
        marginLeft: 10
    }
})