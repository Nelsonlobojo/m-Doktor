import React, { useEffect, useState, useContext} from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import FormContainer from "../../../shared/Form/FormContainer";
import Input from "../../../shared/Form/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-modern-datepicker";
import axios from "axios";
import Toast from "react-native-toast-message";

import baseUrl from "../../../common/baseurl";
import AuthGlobal from "../../../../context/store/AuthGlobal";

var { width } = Dimensions.get("window");

const AppointmentScreen = ({ route }) => {
  const context = useContext(AuthGlobal);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("");

  const navigation = useNavigation();
  const doctor = route.params.item


  const checkOut = () => {
    let appointment = {
      user: context.stateUser.user.userId,
      doctor: route.params.item.id,
      date: date,
      time: time,
      type: type,
    };

    axios
            .post(`${baseUrl}appointments/`, appointment)
            .then((res) => {
                if(res.status == 200) {
                   
                    Toast.show({
                        topOffset: 60,
                        type: "success",
                        text1: "Booking Successful",
                        text2: ""
                    })

                    setTimeout(() => {
                        navigation.navigate("Schedule",{screen:"Completed",params:{doctor:doctor
                        , appointment:appointment}});
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
        minimumDate={new Date()}
        maximumDate={new Date(2021, 12, 31)}
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
      <Text style={styles.text}>Choose the Type</Text>
      <View style={styles.input}>
      <RNPickerSelect 
        style={styles.input}
        onValueChange={(value) => setType(value)}
        items=
        {[
          { label: "Video", value: "video" },
          { label: "Voice", value: "voice" },
          { label: "Message", value: "message" },
        ]}
        value={type}
        />
      </View>
      <View style={{width: "80%", alignItems:'center'}}>
        <Button title="Confirm" onPress={() => checkOut()} />
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

export default AppointmentScreen;
