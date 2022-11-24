import React, { useEffect, useState, useContext} from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-modern-datepicker";
import axios from "axios";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

import baseUrl from "../../../common/baseurl";
import AuthGlobal from "../../../../context/store/AuthGlobal";

var { width } = Dimensions.get("window");

const EditAppointmentScreen = ({ route }) => {
  const context = useContext(AuthGlobal);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigation = useNavigation();
  const editAppointment = route.params.item

  useEffect(() => {
    setDate(editAppointment.date);
    setTime(editAppointment.time);

    return () => {
      setDate("");
      setTime("");
    }

  }, []);


  const update = () => {
    let appointment = {
      date: date,
      time: time,
    };
    AsyncStorage.getItem("jwt").then((res) => {
      axios
            .put(`${baseUrl}appointments/${editAppointment._id}`, appointment, {
              headers: { Authorization: `Bearer ${res}` },
            })
            .then((res) => {
                if(res.status == 200) {
                   
                    Toast.show({
                        topOffset: 60,
                        type: "success",
                        text1: "Update Successful",
                        text2: ""
                    })

                    setTimeout(() => {
                        navigation.goBack();
                    }, 500);
                }
            })
            .catch((error) => {
                console.log(error);
                Toast.show({
                    topOffset: 60,
                    type: "error",
                    text1: "Something went wrong",
                    text2: "Please try again"
                })
            })
    });
    
   
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.text}>Choose the Date</Text>
      <DatePicker
        value={date}
        onSelectedChange={selectedDate => setDate(selectedDate)}
        mode="calendar"
        minimumDate={new Date().toISOString()}
        maximumDate={new Date(2022, 31, 12).toISOString()}
        style = {{borderRadius: 50}}
        disableDateChange={true}
      />
      <Text style={styles.text}>Choose the Time</Text>
      <DatePicker
        mode="time"
        minuteInterval={15}
        onTimeChange={selectedTime => setTime(selectedTime)}
        style = {{borderRadius: 50}}
      />
      <View style={{width: "80%", alignItems:'center'}}>
        <Button title="Update" onPress={() => update()} />
      </View>
      
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 400,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 60,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: "blue",
  },
  text: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
    margin: 10,
  },
});

export default EditAppointmentScreen;
