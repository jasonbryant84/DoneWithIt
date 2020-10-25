import React, { Fragment, useState } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Screen from './Screen'
import defaultStyles from '../config/styles'
import AppText from './AppText'
import PickerItem from './PickerItem'


export default function AppPicker({icon, items, onSelectItem, selectedItem, placeholder}) {
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
                    <AppText 
                        style={styles.text}
                    >
                        {selectedItem ? selectedItem.label : placeholder}
                    </AppText>
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
                    <View>
                        <FlatList
                            data={items}
                            keyExtractor={(item) => item.value.toString()}
                            renderItem={({item}) => (
                                <PickerItem
                                    label={item.label}
                                    onPress={() => {
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
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    }
})