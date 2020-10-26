import React, { Fragment, useState } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Screen from './Screen'
import defaultStyles from '../config/styles'
import AppText from './AppText'
import PickerItem from './PickerItem'


export default function AppPicker({
    icon, 
    items, 
    numberOfColumns = 1,
    onSelectItem, 
    PickerItemComponent = PickerItem, // default value
    selectedItem, 
    placeholder
}) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <Fragment>
            <TouchableWithoutFeedback 
                onPress={() => setModalVisible(true)}
            >
                <View style={styles.container}>
                    { icon && 
                        <MaterialCommunityIcons 
                            name={icon} 
                            size={20} 
                            color={defaultStyles.colors.medium} 
                            style={styles.icon} 
                        /> 
                    }
                    { selectedItem ? 
                        <AppText style={styles.text}>{selectedItem.label}</AppText> :
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    }
                    <MaterialCommunityIcons 
                        name={'chevron-down'} 
                        size={20} 
                        color={defaultStyles.colors.medium} 
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal
                visible={modalVisible}
                animationType={'slide'}
            >
                <Screen>
                    <Button 
                        title="close" 
                        onPress={()=> setModalVisible(false)} 
                    />
                    <View style={styles.modalIconsContainer}>
                        <FlatList
                            data={items}
                            keyExtractor={(item) => item.value.toString()}
                            numColumns={numberOfColumns}
                            renderItem={({item}) => (
                                <PickerItemComponent
                                    item={item}
                                    label={item.label}
                                    onPress={()=> {
                                        setModalVisible(false)
                                        onSelectItem(item)
                                    }}
                                />
                            )}
                        />
                    </View>
                </Screen>
            </Modal>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    modalIconContainer: {
        width: 200,
        alignItems: 'center'
    },
    modalIconsContainer: {
        flexDirection: 'row',
        paddingTop: 10
    },  
    modalIcon: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: defaultStyles.colors.black,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
    },  
    text: {
        flex: 1
    }
})