import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Button, Dimensions, ScrollView } from "react-native";
import Input from "../../shared/Form/Input";
import Error from "../../shared/Error";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import axios from "axios"
import { Toast } from "react-native-toast-message/lib/src/Toast";

var {width} = Dimensions.get('window');

const UserRegister = (props) => {

    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const register = () => {
        if(name === "" || phone === "" || email === "" || password === "" || confirmPassword === "") {
            setError("Please fill in the form correctly");
        }
        else if(password !== confirmPassword) {
            setError("Passwords do not match");
        }
        else {
        }
         let user = {
                name: name,
                email: email,
                phone: phone,
                password: password,
            }

        axios
            .post(`${baseUrl}users/register`, user)
            .then((res) => {
                if(res.status == 200) {
                    Toast.show({
                        topOffset: 60,
                        type: "success",
                        text1: "Registration Successful",
                        text2: "Please login"
                    })

                    setTimeout(() => {
                        navigation.navigate("UserLogin");
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
                    <Button title="Back to Login" onPress={() => navigation.navigate("UserLogin")} />
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
})

export default UserRegister;