import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";

import DoctorContainer from "./DoctorContainer";

const DoctorPage = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#0682FE" />
            <DoctorContainer />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default DoctorPage;