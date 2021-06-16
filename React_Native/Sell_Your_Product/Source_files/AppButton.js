import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

import Colors from "../components/Colors"


class AppButton extends Component{
    
     render(){ return(
        
        <TouchableOpacity style={styles.buttondesign}>
            <Text style={styles.text}>{this.props.title}</Text>
        </TouchableOpacity>
       
    )
}}

export default AppButton;

const styles = StyleSheet.create({
    buttondesign: {
        backgroundColor: Colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: '100%',
        marginVertical: 10
    },
    text: {
        color: Colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'

    }
})


