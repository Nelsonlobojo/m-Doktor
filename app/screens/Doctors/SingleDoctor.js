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

import AuthGlobal from "../../../context/store/AuthGlobal";



const SingleDoctor = (props) => {
    const context = useContext(AuthGlobal);
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
                    : "https://picsum.photos/id/1/200/300",
                }}
                resizeMethod="contain"
            />
            </View>
            <View style={styles.container}>
            <Text style={styles.name}>Name:{doctorItem.name}</Text>
            <Text style={styles.body}>Email:{doctorItem.email}</Text>
            <Text style={styles.body}>Price:{doctorItem.price}</Text>
            <Text style={styles.body}>Phone:{doctorItem.phone}</Text>
            <Text style={styles.username}>Bio:{doctorItem.bio}</Text>
            </View>
        </ScrollView>
        {context.stateUser.isAuthenticated ? (
            <View style={styles.bottomContainer}>
            <Button onPress={() => navigation.navigate("Appointment",{screen:'Date/Time',
            params:{item:doctorItem}})} title="Consult" />
        </View>
        ): (
            <View style={styles.bottomContainer}>
            <Button onPress={() => navigation.navigate("User",{screen:'UserLogin',
            })} title="Login" />
        </View>
        )}
        
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