import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";

const Login = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#0682FE" />
            <Text>Login</Text>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})