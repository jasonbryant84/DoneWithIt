import React from 'react';
import { Text, Image, StyleSheet, View, Button} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color="white" size={35} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
        </View>
        <Image 
            style={styles.image} 
            source={require('../assets/chair.jpg')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    closeIcon: {
      position: 'absolute',
      top: 40,
      left: 30
    },  
    container: { 
        position: 'relative',
        paddingTop: 70,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: colors.black
    },
    deleteIcon: {
      position: 'absolute',
      top: 40,
      right: 30
    }, 
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})