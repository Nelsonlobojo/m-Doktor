import React from "react";
import { StyleSheet, View, Dimensions, Image, Button, Text } from "react-native";

var  {height,width} = Dimensions.get('window');

const DoctorCard = (props) => {
    const name = props.name;
    const image = props.profilePicture 
    const email = props.email
    const price = props.price.toString()

    
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
                Dr:{name.length > 15 ? name.substring(0, 15-3) + "..." : name}
            </Text>
            <Text style={styles.body}>
               Email:{email.length > 15 ? email.substring(0, 15-3) + "..." : email}
            </Text>
            <Text style={styles.body}>
                Price:{price}
            </Text>
            <Button title="Book" color="blue" />
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

export default DoctorCard;