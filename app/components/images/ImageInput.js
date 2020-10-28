import React, { useEffect } from 'react'
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

/* TWO ways to get permissions */
// import * as Permissions from 'expo-permissions'
// const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
// result.granted

import defaultStyles from '../../config/styles'

export default function ImageInput({ imageUri, onChangeImage }) {
    useEffect(() => {
        requestPermission()
    },[])

    const handlePress = () => {
        if(!imageUri) selectImage()
        else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            { text: 'Yes', onPress: () => onChangeImage() },
            { text: 'No'}
        ])
    }

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
        if(!granted) {
            alert('You need to enable permission to access the library')
        }
    }

    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.5 // 0 to 1 (filesize)
          })
          if (!result.cancelled) onChangeImage(result.uri)
        } catch (error) {
          console.log('Error reading an image', error)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (
                    <MaterialCommunityIcons 
                        name="camera" 
                        color={defaultStyles.colors.medium} 
                        size={50} 
                    />
                )}
                {imageUri && (
                    <Image 
                        style={styles.image}
                        source={{ uri: imageUri }} 
                    />
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 100
    },
    image: {
        flex: 1,
        height: '100%',
        width: '100%'
    }
})