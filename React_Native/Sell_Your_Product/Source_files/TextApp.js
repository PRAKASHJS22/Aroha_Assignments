import React, {Children, Component} from 'react';
import {Text, StyleSheet, Platform} from 'react-native';


class TextApp extends Component{
    render(){
        return(
        <Text style={[styles.text, this.props.style]}>
            {this.props.children}
        </Text>
    )
}}
    
const styles = StyleSheet.create({
    text: {
        color: 'tomato',
        fontSize: 10,
        ...Platform.select({
            ios: {
                fontSize: 10,
                fontFamily: 'Avenir',
            },
            android: {
                fontSize: 20,
                fontFamily: 'Roboto'
            }
        }) 
    }
})

export default TextApp;