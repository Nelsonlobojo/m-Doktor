import React from "react";
import { StyleSheet, Image, SafeAreaView, Text } from "react-native";

const SharedHeader = () => {
    return (
        <SafeAreaView style ={styles.header}>
            <Image source={require("../assets/images/logo.png")} 
            style={{width: 150 ,height: 150}} 
            resizeMethod="contain"
            />
        </SafeAreaView>
    )

  
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        padding: 20,
    }
})

export default SharedHeader;