import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, Button, Dimensions, ScrollView, TouchableOpacity, Platform } from "react-native";
import Input from "../../../shared/Form/Input";
import Error from "../../../shared/Error";
import Toast from "react-native-toast-message";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

import axios from "axios";
import baseUrl from "../../../common/baseurl";
import AsyncStorage from "@react-native-async-storage/async-storage";

var {width} = Dimensions.get('window');

const AddMedical = (props) => {

  const navigation = useNavigation();
  const {item} = props.route.params;
  console.log(item);

  const [diagnosis, setDiagnosis] = useState("");
  const [prescription, setPrescription] = useState("");
  const [treatment, setTreatment] = useState("");
  const [error, setError] = useState("");

  const addMedical = () => {
    if(diagnosis === "" || prescription === "" || treatment === "") {
      setError("Please fill in the form correctly");
    }
    
    let record = {
      date: item.date,
      appointment: item._id,
      user: item.user.id,
      doctor: item.doctor.id,
      diagnosis: diagnosis,
      prescription: prescription,
      treatment: treatment,
    }

    AsyncStorage.getItem("jwt").then((res) => {
      axios
        .post(`${baseUrl}records`, record, {
          headers: { Authorization: `Bearer ${res}` },
        })
        .then((res) => {
          if(res.status == 201) {
            Toast.show({
              topOffset: 60,
              type: "success",
              text1: "Record Added Successfully",
              text2: ""
            })
            //navigation.navigate("DoctorAppointments");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });

  }

  return (
    <KeyboardAwareScrollView
    viewIsInsideTabBar={true}
    extraHeight={200}
    enableOnAndroid={true}
  >
   <ScrollView contentContainerStyle={styles.container}>
       <Text style={styles.title}>Add Record</Text>
       <Input 
           placeholder={"Enter Diagnosis"}
           name={"diagnosis"}
           id={"diagnosis"}
           value={diagnosis}
           onChangeText={(text) => setDiagnosis(text)}
       />
       <Input
           placeholder={"Enter Treatment"}
           name={"treatment"}
           id={"trearment"}
           value={treatment}
           onChangeText={(text) => setTreatment(text)}
       />
        <Input
           placeholder={"Enter Prescription"}
           name={"prescription"}
           id={"prescription"}
           value={prescription}
           onChangeText={(text) => setPrescription(text)}
       />
       <View>
           {error ? <Error message={error} /> : null}
       </View>
       <View>
           <Button title="Add Record" onPress={() => addMedical()}  />
       </View>
   </ScrollView>
  </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
      marginTop: 30,
      marginBottom: 400,
      width: width,
      justifyContent: "center",
      alignItems: "center",
  },
  title: {
      fontSize: 30,
      color: "blue",
  },
  buttonGroup: {
      width: "80%",
      alignItems: "center",
      margin: 10,
  },
  registerText: {
      marginBottom: 20,
      alignSelf: "center",
  },
  imageContainer: {
      width: 200,
      height: 200,
      borderStyle: "solid",
      borderWidth: 8,
      padding: 0,
      justifyContent: "center",
      borderRadius: 100,
      borderColor: "blue",
      elevation: 10,
  },
  image: {
      width: "100%",
      height: "100%",
      borderRadius: 100,
  },
  imagePicker: {
      position: "absolute",
      bottom: 5,
      right: 5,
      backgroundColor: "grey",
      padding: 8,
      borderRadius: 100,
      elevation: 20,
  }
})

export default AddMedical
