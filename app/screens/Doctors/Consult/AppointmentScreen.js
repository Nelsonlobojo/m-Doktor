import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import FormContainer from "../../../shared/Form/FormContainer";
import Input from "../../../shared/Form/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";


const AppointmentScreen = ({ route }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const navigation = useNavigation();

  const checkOut = () => {
    let appointment = {
        date: date,
        time: time,
        doctor: route.params.item.id.value
    }
    navigation.navigate("Appointment",{screen:'Payment', params:{appointment:appointment}})
  };
  

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
       
     
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      
    },
  });

export default AppointmentScreen;
