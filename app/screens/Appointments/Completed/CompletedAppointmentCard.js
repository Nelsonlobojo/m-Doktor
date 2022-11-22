import React from 'react'
import { StyleSheet, View, Dimensions, Image, Button, Text } from "react-native";

var  {height,width} = Dimensions.get('window');

const CompletedAppointmentCard = (props) => {

  const date = props.date
  const dateNow = new Date(date)
  const time = props.time;
  const doctorName = props.doctor.name;
  const doctorPhone = props.doctor.phone;
  const doctorPicture = props.doctor.profilePicture;

  return (
    <View style={styles.container}>
      <Image source={{
        uri: doctorPicture
          ? doctorPicture
          : "https://picsum.photos/id/1/200/300",
        }}
        style={styles.image}
        resizeMethod="contain"
      />
      <View style={styles.card} />
      <Text style={styles.name}>
        Dr {doctorName.length > 15 ? doctorName.substring(0, 15-3) + "..." : doctorName}
      </Text>
      <Text style={styles.body}>
        Date: {dateNow.toDateString()}
      </Text>
      <Text style={styles.body}>
        Time:{time}
      </Text>
      <Text style={styles.body}>  
       Phone: {doctorPhone.length > 15 ? doctorPhone.substring(0, 15-3) + "..." : doctorPhone}
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

export default CompletedAppointmentCard;
