import React, {useEffect, useState, useContext} from "react";
import { View, Text, StyleSheet, TextInput, Button, Dimensions, ScrollView } from "react-native";
import FormContainer from "../../shared/Form/FormContainer";
import { useNavigation } from "@react-navigation/native";
import Input from "../../shared/Form/Input";
import Error from "../../shared/Error";

// Context
import AuthGlobal from "../../../context/store/AuthGlobal";
import {loginDoctor}  from "../../../context/actions/Auth_actions";

var {width} = Dimensions.get('window');

const DoctorLogin = (props) => {

    const context = useContext(AuthGlobal);
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if(context.stateDoctor.isAuthenticated === true){
            navigation.navigate("Doctor",{screen:"Doctor-Profile"});
        }
    }, [context.stateDoctor.isAuthenticated]);

    const handleSubmit = () => {

        const doctor = {
            email,
            password
        }

        if(email === "" || password === "") {
            setError("Please fill in your credentials");
        }
        else {
            loginDoctor(doctor, context.dispatchDoctor)
            
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Login</Text>
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
            <View style={styles.buttonGroup}>
                {error ? <Error message={error} /> : null}
                <Button title="Login" onPress={() =>  handleSubmit()} />
            </View>
            <View style={[styles.buttonGroup, {marginTop:40}]}>
                <Text style={styles.registerText}>New Customer?</Text>
                <Button title="Register as User" onPress={() => navigation.navigate("UserRegister")} />
                <Button title="Register as Doctor" onPress={() => navigation.navigate("Doctor",{screen:'DoctorRegister'})} />
                <Button title ="Login as User" onPress={() => navigation.navigate("User",{screen:'UserLogin'})} />
            </View>
        </ScrollView>
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
    },
    registerText: {
        marginBottom: 20,
        alignSelf: "center",
    },
})

export default DoctorLogin;