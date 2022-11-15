import React, { useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SingleDoctor = (props) => {
    const navigation = useNavigation();
    const [doctorItem, setDoctorItem] = useState(props.route.params.item);
   
    
    return (
        <View>
        <ScrollView style={{ marginBottom: 80, padding: 5 }}>
            <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{
                uri: doctorItem.profilePicture
                    ? doctorItem.profilePicture
                    : "https://picsum.photos/200/300",
                }}
                resizeMethod="contain"
            />
            </View>
            <View style={styles.contentContainer}>
            <Text style={styles.name}>{doctorItem.name}</Text>
            <Text style={styles.body}>{doctorItem.email}</Text>
            <Text style={styles.body}>{doctorItem.speciality}</Text>
            <Text style={styles.body}>{doctorItem.price}</Text>
            <Text style={styles.body}>{doctorItem.phone}</Text>
            <Text style={styles.username}>{doctorItem.bio}</Text>
            </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
            <Button onPress={() => navigation.navigate("Appointment",{screen:'Date/Time',
            params:{item:doctorItem}})} title="Consult" />
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: 100,
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

export default SingleDoctor;