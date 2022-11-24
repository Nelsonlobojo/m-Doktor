import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";

import MedicalContainer from "./MedicalContainer";

const MedicalRecord = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#0682FE" />
            <MedicalContainer />
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

export default MedicalRecord;