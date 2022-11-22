import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import Input from "../../shared/Form/Input";
import Error from "../../shared/Error";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import mime from "mime";

import axios from "axios";
import baseUrl from "../../common/baseurl";

import AuthGlobal from "../../../context/store/AuthGlobal";
import AsyncStorage from "@react-native-async-storage/async-storage";

var { width } = Dimensions.get("window");

const EditUserProfile = (props) => {
    const navigation = useNavigation();
    const userProfile = props.route.params.userProfile;
    const context = useContext(AuthGlobal);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        async () => {
          if (Platform.OS !== "web") {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== "granted") {
              alert("Sorry, we need camera roll permissions to make this work!");
            }
          }
        };
      }, []);

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
          setProfilePicture(result.uri);
        }
      };

      useEffect(() => {
        setName(userProfile.name);
        setPhone(userProfile.phone.toString());
        setEmail(userProfile.email);
        setProfilePicture(userProfile.profilePicture);
    
        return () => {
            setName("");
            setPhone("");
            setEmail("");
            setProfilePicture("");
        }
      }, []);

      const update = () => {
        if (
          name === "" ||
          phone === "" ||
          email === "" 
        ) {
          setError("Please fill in the form correctly");
        }
    
        const newImageUri = "file:///" + profilePicture.split("file:/").join("");
    
        let user = {
          name: name,
          email: email,
          phone: phone,
          // profilePicture: {
          //     uri: newImageUri,
          //     type: mime.getType(newImageUri),
          //     name: newImageUri.split("/").pop()
          // },
        };
        AsyncStorage.getItem("jwtToken").then((res) => {
            axios
          .put(`${baseUrl}users/${userProfile._id}`, user, 
          {headers : {Authorization: `Bearer ${res}`}})
          .then((res) => {
            if (res.status == 200) {
              Toast.show({
                topOffset: 60,
                type: "success",
                text1: "Profile Updated Successful",
                text2: "",
              });
    
              setTimeout(() => {
                navigation.navigate("UserProfile");
              }, 500);
            }
          })
          .catch((error) => {
            console.log(error);
            Toast.show({
              topOffset: 60,
              type: "error",
              text1: "Something went wrong",
              text2: "Please try again",
            });
          });
        });
        
      };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Edit Profile</Text>
        {/* <View style={styles.imageContainer}>
                    <Image style={styles.image} source ={{uri: profilePicture}}/>
                    <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
                        <Icon name="camera" size={30} color="#fff" />
                    </TouchableOpacity>
                </View> */}
        <Input
          placeholder={"Enter Name"}
          name={"name"}
          id={"name"}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder={"Enter Phone"}
          name={"phone"}
          id={"phone"}
          value={phone}
          keyboardType={"numeric"}
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          placeholder={"Enter Email"}
          name={"email"}
          id={"email"}
          value={email}
          onChangeText={(text) => setEmail(text.toLowerCase())}
        />
        <View>{error ? <Error message={error} /> : null}</View>
        <View>
          <Button title="Update" onPress={() => update()} />
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
    },
  });

export default EditUserProfile