import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        height:840
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: 'center'
    },
    logo: {
        width: 300,
        height: 150,
        resizeMode: 'contain'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        paddingVertical: 20
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
},

})

export default styles;