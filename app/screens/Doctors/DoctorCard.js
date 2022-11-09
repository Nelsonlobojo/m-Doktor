import React from "react";
import { StyleSheet, View, Dimensions, Image, Button, Text } from "react-native";

var  {height,width} = Dimensions.get('window');

const DoctorCard = (props) => {
    const image = props.picture.large;
    const firstName = props.name.first;
    const lastName = props.name.last;
    const email = props.email;
    const name = firstName + " " + lastName;
    
    return (
        <View style={styles.container}>
            <Image source={{uri:image}}
            style={styles.image} 
            resizeMethod="contain"
            />
            <View style={styles.card} />
            <Text style={styles.name}>
                {name.length > 15 ? name.substring(0, 15-3) + "..." : name}
            </Text>
            <Text style={styles.specialty}>
                {email.length > 15 ? email.substring(0, 15-3) + "..." : email}
            </Text>
            <View>
            </View>
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
    specialty:{

        fontSize: 14,
        color: "grey",
        textAlign: "center",
        left: 0,
    }
});

export default DoctorCard;