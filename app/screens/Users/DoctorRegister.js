import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, Button, Dimensions, ScrollView, TouchableOpacity, Platform } from "react-native";
import Input from "../../shared/Form/Input";
import Error from "../../shared/Error";
import Toast from "react-native-toast-message";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import mime from 'mime';

import axios from "axios";
import baseUrl from "../../common/baseurl";

var {width} = Dimensions.get('window');

const DoctorRegister = (props) => {

    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [price, setPrice] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {

        (async () => {
            if(Platform.OS !== "web"){
                const {
                    status
                } = await ImagePicker.requestCameraPermissionsAsync();
                if(status !== "granted"){
                    alert("Sorry, we need camera roll permissions to make this work!");
                }
            }
        })

    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if(!result.cancelled){
            setProfilePicture(result.uri);
        }
    }

    const register = () => {
        if(name === "" || phone === "" || email === "" || password === "" || confirmPassword === "" || bio === "" || price === "") {
            setError("Please fill in the form correctly");
        }
        else if(password !== confirmPassword) {
            setError("Passwords do not match");
        }

        const newImageUri = "file:///" + profilePicture.split("file:/").join("");

        let doctor = {
            name: name,
            email: email,
            phone: phone,
            bio: bio,
            price: price,
            // profilePicture: {
            //     uri: newImageUri,
            //     type: mime.getType(newImageUri),
            //     name: newImageUri.split("/").pop()
            // },
            password: password,
        }

        axios
            .post(`${baseUrl}doctors/register`, doctor)
            .then((res) => {
                if(res.status == 200) {
                   
                    Toast.show({
                        topOffset: 60,
                        type: "success",
                        text1: "Registration Successful",
                        text2: "Please login"
                    })

                    setTimeout(() => {
                        navigation.navigate("DoctorLogin");
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


    }


    return (
           <KeyboardAwareScrollView
             viewIsInsideTabBar={true}
             extraHeight={200}
             enableOnAndroid={true}
           >
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Register</Text>
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
                <Input
                    placeholder={"Enter Bio"}
                    multiline={true}
                    numberOfLines={4}
                    name={"bio"}
                    id={"bio"}
                    value={bio}
                    onChangeText={(text) => setBio(text)}
                />
                <Input
                    placeholder={"Enter Price"}
                    name={"price"}
                    id={"price"}
                    value={price}
                    keyboardType={"numeric"}
                    onChangeText={(text) => setPrice(text)}
                />
                <Input
                    placeholder={"Enter Password"}
                    name={"password"}
                    id={"password"}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Input
                    placeholder={"Confirm Password"}
                    name={"confirmPassword"}
                    id={"confirmPassword"}
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                />

                <View>
                    {error ? <Error message={error} /> : null}
                </View>
                <View>
                    <Button title="Register" onPress={() => register()}  />
                </View>
                <View>
                    <Button title="Back to Login" onPress={() => navigation.navigate("User",{screen:"UserLogin"})} />
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

export default DoctorRegister;