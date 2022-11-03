import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";

import NewsItemContainer from "../NewsItems/NewsContainer";

const Login = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#0682FE" />
            <NewsItemContainer />
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