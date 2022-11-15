import React, { useEffect, useState } from "react";
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

var { width } = Dimensions.get("window");

const AppointmentScreen = ({ route }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [type, setType] = useState("");

  const navigation = useNavigation();

  const checkOut = () => {
    let appointment = {
      date: date,
      time: time,
      doctor: route.params.item.id.value,
      type: type,
    };
    navigation.navigate("Appointment", {
      screen: "Payment",
      params: { appointment: appointment },
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
        onSelectedChange={(date) => setDate(date)}
        mode="date"
        minimumDate={new Date()}
        maximumDate={new Date(2021, 12, 31)}
        style = {{borderRadius: 50}}
        disableDateChange={true}
      />
      <Text style={styles.text}>Choose the Time</Text>
      <DatePicker
        mode="time"
        minuteInterval={15}
        value={time}
        onSelectedChange={(time) => setTime(time)}
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
