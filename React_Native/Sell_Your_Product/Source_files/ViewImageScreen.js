import React, { Component } from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Colors from "../components/Colors"

class ViewImageScreen extends Component {
render(){  
    return(
    <View style={styles.container}>
        {/* <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View> */}
        <View style={styles.back}><Ionicons name="arrow-back-sharp" size={24} color="white" /></View>
        <View style={styles.forward}><Ionicons name="arrow-forward-sharp" size={24} color="white" /></View>
        <Image 
            style={styles.image} 
            source={require("../assets/Headphone.jpg")}
        />
    </View>
)
}
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    back:{
        position:"relative",
        top:30,
        left:10
        },
        forward:{
        position:"absolute",
        top:30,
        right:10,
        },
})

export default ViewImageScreen;