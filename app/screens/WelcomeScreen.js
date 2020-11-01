import React from 'react';
import { Text, Image, ImageBackground, StyleSheet, View} from 'react-native';

import AppButton from '../components/AppButton' 
import routes from '../navigation/routes' // { routes } from index?

export default function WelcomeScreen({ navigation }) {
  const handleLogin = () => {
    navigation.navigate(routes.LOGIN)
  }

  const handleRegister = () => {
    navigation.navigate(routes.REGISTER)
  }

  return (
    <ImageBackground 
        blurRadius={10}
        style={styles.container} 
        source={require('../assets/background.jpg')}
    >
        <Image 
            style={styles.logo} 
            source={require('../assets/logo-red.png')}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>

        <View style={styles.ctas}>
            <AppButton title="Login" color="primary" onPress={handleLogin}/>
            <AppButton title="Register" color="secondary" onPress={handleRegister} />
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { 
    position: 'relative',
    paddingTop: 70,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  ctas: {
    position: 'absolute',
    width: '100%',
    padding: 20,
    bottom: 0
  },
  logo: {
    height: 100,
    width: 100
  },
  tagline: {
      fontSize: 25,
      fontWeight: '600',
      paddingVertical: 20
  }
})