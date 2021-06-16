import React, { Component } from 'react';
import {View, StyleSheet, Image} from 'react-native';
import TextApp from "../components/TextApp"
import Colors from "./Colors"


class ListItem extends Component {
    render(){  
          return(
        <View style={styles.container}>
        <Image style={styles.image} source={this.props.image}/>
            <View>
                <TextApp style={styles.title}>{this.props.title}</TextApp>
                <TextApp style={styles.subTitle}>{this.props.subTitle}</TextApp>
            </View>
        </View>
    )
}}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    subTitle:{
        color: Colors.medium,
        fontWeight: "700"
    },
    title: {
        fontWeight: "700"
    }

})

export default ListItem;