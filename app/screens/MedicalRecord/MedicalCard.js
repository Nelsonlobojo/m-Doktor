import React from "react";
import { StyleSheet, View, Dimensions, Image, Button, Text } from "react-native";

var  {height,width} = Dimensions.get('window');

const MedicalCard = (props) => {

    const doctorName = props.doctor.name
    const date= props.appointment.date
    const newdate = date.split("T")[0]
    const diagnosis = props.diagnosis 
    const image= props.doctor.profilePicture

    return (
        <View style={styles.container}>
             <Image source={{
                uri: image
                    ? image
                    : "https://picsum.photos/id/1/200/300",
                }}
            style={styles.image} 
            resizeMethod="contain"
            />
            <View style={styles.card} />
            <Text style={styles.name}>
                Dr: {doctorName}
            </Text>
            <Text style={styles.body}>
                Appointment Date: {newdate}
            </Text>
            <Text style={styles.body}>
                Diagnosis: {diagnosis}
            </Text>
            <Button title="View" color="blue" />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        width: width - 20,
        height: 100,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginLeft: 10,
        marginBottom: 5,
        alignItems: "center",
        elevation: 8,
        backgroundColor: "white"
    },
    image:{
        width: 100,
        height: 100,
        backgroundColor: "transparent",
        position: "absolute",
        left: 10,
        borderRadius: 100
    },
    card: {
        height: 0,
        backgroundColor: "transparent",
        width: 100,
    },
    name:{
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        left: 0,
    },
    body:{
        fontSize: 14,
        color: "grey",
        textAlign: "center",
        left: 20,
    }
});

export default MedicalCard;