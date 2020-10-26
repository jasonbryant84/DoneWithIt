import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import defaultStyles from '../../config/styles'

import AppText from '../AppText'

function ListItem({
        title, 
        subTitle, 
        image, 
        IconComponent, 
        onPress, 
        renderRightActions, 
        showChevrons,
        style 
    }) {

    return (
        <Swipeable 
            renderRightActions={renderRightActions}
        >
            <TouchableHighlight 
                onPress={onPress}
                underlayColor={defaultStyles.colors.light}
            >
                <View style={[styles.container, style]}>
                    { IconComponent }
                    { image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        { subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText> }
                    </View>
                    {showChevrons && (
                        <MaterialCommunityIcons 
                            name={'chevron-right'} 
                            size={20} 
                            color={defaultStyles.colors.medium} 
                            style={styles.chevron} 
                        /> 
                    )}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    chevron: {
        right: 0
    },  
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: defaultStyles.colors.white,
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    subTitle: {
        color: defaultStyles.colors.medium
    },
    title: {
        fontWeight: '500'
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10
    }
})