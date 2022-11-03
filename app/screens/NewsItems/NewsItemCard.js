import React from "react";
import { StyleSheet, View, Dimensions, Image, Button, Text } from "react-native";

var {height, width} = Dimensions.get('window');

const NewsItemCard = (props) => {
    const {title, body} = props;
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://picsum.photos/200/300'}} 
            style={styles.image} 
            resizeMethod="contain"
            />
            <View style={styles.card} />
            <Text style={styles.title}>
                {title.length > 15 ? title.substring(0, 15-3) + "..." : title}
            </Text>
            <Text style={styles.body}>
                {body.length > 15 ? body.substring(0, 15-3) + "..." : body}
            </Text>
            <View>
                <Button title="Read More" color="#0682FE" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: width - 20,
        height: width/1.7, 
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
        width: width/2 - 20 -10,
        height: width/2 - 20 -30,
        backgroundColor: "transparent",
        position: "absolute",
        top: 20,
        left: 10,
    },
    card: {
        marginBottom: 10,
        height: width/2 - 20 -90,
        backgroundColor: "transparent",
        width: width/2 -20 -10,
    },
    title:{
        flex: 1,
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        left: 70,
    },
    body:{
        flex: 1,
        fontSize: 14,
        color: "black",
        textAlign: "center",
        marginBottom: 30,
        left: 70,
    },
    price: {
        fontSize: 20,
        color: "blue",
        marginTop: 10,
    }
})

export default NewsItemCard;