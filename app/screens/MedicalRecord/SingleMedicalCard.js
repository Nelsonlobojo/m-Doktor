import React, { useState, useContext } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


const SingleMedicalCard = (props) => {
    const navigation = useNavigation();
    const [medicalRecord, setMedicalRecord] = useState(props.route.params.item); 
    const date = medicalRecord.appointment.date
    const newDate = date.split('T')[0]
    return (
        <View>
        <ScrollView style={{ marginBottom: 80, padding: 5 }}>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{
                uri: medicalRecord.doctor.profilePicture
                    ? medicalRecord.doctor.profilePicture
                    : "https://picsum.photos/id/1/200/300",
                }}
                resizeMethod="contain"
            />
            </View>
            <View style={styles.container}>
            <Text style={styles.name}>Name:{medicalRecord.doctor.name}</Text>
            <Text style={styles.body}>Date:{newDate}</Text>
            <Text style={styles.body}>Patient Name:{medicalRecord.user.name}</Text>
            <Text style={styles.body}>Diagnosis:{medicalRecord.diagnosis}</Text>
            <Text style={styles.body}>Treatment:{medicalRecord.treatment}</Text>
            <Text style={styles.body}>Prescription:{medicalRecord.treatment}</Text>
            </View>
            <View style={styles.bottomContainer}>
            <Button onPress={() => navigation.goBack()} title="Done" />
            </View>
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: 200,
    },
    imageContainer: {
        backgroundColor: "transparent",
        margin: 0,
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "50%",
        height: 200,
        borderRadius: 100,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        margin: 10,
    },
    username: {
        fontSize: 16,
        color: "black",
        textAlign: "center",
        margin: 10,
    },
    bottomContainer: {
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        height: 100,
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue",
        textAlign: "center",
    }
});

export default SingleMedicalCard;