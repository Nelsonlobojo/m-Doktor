import React, { useContext, useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


import axios from 'axios'
import baseUrl from "../../../common/baseurl";
import AsyncStorage from "@react-native-async-storage/async-storage";


const SingleAppointment = (props) => {
    const navigation = useNavigation();
    const [appointmentItem, setAppointmentItem] = useState(props.route.params.item);
    const date = appointmentItem.date;
    const dateNow = new Date(date);

    const chat = () => {

      let status = {
        status: "Completed"
      }
       AsyncStorage.getItem("jwt")
        .then((res) => {
          axios
            .put(
              `${baseUrl}appointments/status/${appointmentItem._id}` ,status,
              {
                headers: { Authorization: `Bearer ${res}` },
              }
            )
            .then((user) => {
              navigation.navigate("Add Medical", { item: appointmentItem });
            })
            .catch((error) => console.log(error));
        })
    }

  return(
    <View>
        <ScrollView style={{ marginBottom: 80, padding: 5 }}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: appointmentItem.user.profilePicture
                  ? appointmentItem.user.profilePicture
                  : "https://picsum.photos/id/1/200/300",
              }}
              resizeMethod="contain"
            />
          </View>
          <View style={styles.container}>
          <Text style={styles.name}>Patient {appointmentItem.user.name}</Text>
            <Text style={styles.body}>Date: {dateNow.toDateString()}</Text>
            <Text style={styles.body}>Time: {appointmentItem.time}</Text>
            <Text style={styles.body}>Email: {appointmentItem.user.email}</Text>
            <Text style={styles.body}>Phone: {appointmentItem.user.phone}</Text>
          </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <Button title="Chat" onPress={()=> chat()} />
        </View>
    </View>
  )
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
      height: 50,
  },
  body: {
      margin: 10,
      fontSize: 20,
      color: "black",
      textAlign: "center",
  }
});

export default SingleAppointment;
