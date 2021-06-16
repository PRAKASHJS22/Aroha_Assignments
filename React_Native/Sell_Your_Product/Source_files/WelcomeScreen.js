
import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';

import styles from "../components/Styles"
import AppButton from "../components/AppButton"

class WelcomeScreen extends Component{
    render(){
        return( 
        <ImageBackground style={styles.background} source={require('../assets/backgroundimage1.jpeg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Text style={styles.textStyle}>Sell Your Products </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login"/>
                <AppButton title="Signup"/>
            </View>  
        </ImageBackground>
    )
  }
}

export default WelcomeScreen;













