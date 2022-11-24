import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";

import UpcomingAppointment from "./UpcomingAppointment";

const Upcoming = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#0682FE" />
            <UpcomingAppointment />
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

export default Upcoming;