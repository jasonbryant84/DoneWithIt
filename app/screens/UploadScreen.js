import React from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import * as Progress from 'react-native-progress'
import LottieView from 'lottie-react-native'

import defaultStyles from '../config/styles'


export default function UploadScreen({ onDone, progress = 0, visible = false}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                { progress < 1 ? (
                        <Progress.Bar
                            progress={progress}
                            color={defaultStyles.colors.primary}
                            width={200}
                        /> 
                    ) : (
                        <LottieView
                            autoPlay
                            loop={false}
                            onAnimationFinish={onDone}
                            source={require('../assets/animations/done.json')}
                            style={styles.animation}
                        />
                    )
                    
                }
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    animation: {
        width: 150
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})