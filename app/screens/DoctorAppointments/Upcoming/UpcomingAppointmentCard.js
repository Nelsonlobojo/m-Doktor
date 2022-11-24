import React from 'react'
import { StyleSheet, View, Dimensions, Image, Button, Text } from "react-native";

var  {height,width} = Dimensions.get('window');

const UpcomingAppointmentCard = (props) => {

  const date = props.date
  const dateNow = new Date(date)
  const time = props.time;
  const userName = props.user.name;
  const userPhone = props.user.phone;
  const userPicture = props.user.profilePicture;

  return (
    <View style={styles.container}>
      <Image source={{
        uri: userPicture
          ? userPicture
          : "https://picsum.photos/id/1/200/300",
        }}
        style={styles.image}
        resizeMethod="contain"
      />
      <View style={styles.card} />
      <Text style={styles.name}>
        Patient {userName.length > 15 ? userName.substring(0, 15-3) + "..." : userName}
      </Text>
      <Text style={styles.body}>
        Date: {dateNow.toDateString()}
      </Text>
      <Text style={styles.body}>
        Time:{time}
      </Text>
      <Text style={styles.body}>  
       Phone: {userPhone.length > 15 ? userPhone.substring(0, 15-3) + "..." : userPhone}
      </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
      width: width - 20,
      height: 100,
      padding: 10,
      borderRadius: 10,
      marginTop: 55,
      marginLeft: 10,
      marginBottom: 20,
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
      marginLeft: 20,
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
      left: 10,
  }
});

export default UpcomingAppointmentCard;
