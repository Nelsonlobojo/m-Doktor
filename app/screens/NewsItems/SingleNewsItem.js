import React, {useState, useEffect} from "react";
import {Image, View, StyleSheet, Text, ScrollView, Button} from "react-native";

const SingleNewsItem = (props) => {
    const [item, setItem] = useState(props.route.params.item);

    return (
        <ScrollView style={{marginBottom: 80, padding:5}}>
            <View style={styles.imageContainer}>
                <Image 
                style={styles.image} 
                source={{
                    uri: item.image ? item.image : "https://picsum.photos/200/300"
                    }}
                resizeMethod="contain"
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
            </View>
        </ScrollView>
    );
}

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
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        margin: 10,
    },
    body: {
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

})

export default SingleNewsItem;