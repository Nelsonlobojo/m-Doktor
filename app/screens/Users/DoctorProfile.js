import React, {useContext, useState, useEffect} from "react";
import { View, Text, Button, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import {useNavigation} from "@react-navigation/native";

import axios from "axios";
import baseUrl from "../../common/baseurl";

import AuthGlobal from "../../../context/store/AuthGlobal";
import {logOutDoctor} from "../../../context/actions/Auth_actions";

const DoctorProfile = (props) => {

    const context = useContext(AuthGlobal);
    const [doctorProfile, setDoctorProfile] = useState();
    const navigation = useNavigation();

    useFocusEffect(
        React.useCallback(() => {
            if(context.stateDoctor.isAuthenticated === false || context.stateUser.isAuthenticated === null) {
                navigation.navigate("DoctorLogin");
            }
            AsyncStorage.getItem("jwt")
            .then((res) => {
                axios.get(`${baseUrl}doctors/${context.stateDoctor.doctor.doctorId}`, {
                    headers: {Authorization: `Bearer ${res}`}
                })
                .then((doctor) => {
                    setDoctorProfile(doctor.data);
                    
                })
                .catch((error) => console.log(error));
    
            })
            .catch((error) => console.log(error))

            return () => {
                setDoctorProfile();
            }
        }, [context.stateDoctor.isAuthenticated])     
    )

    return (
       <ScrollView>
            <Text style={{fontSize:30}}>{doctorProfile ? doctorProfile.name : ""}</Text>
            <View style={{marginTop: 20}}>
                <Text style={{margin:10}}>
                    Email: {doctorProfile ? doctorProfile.email : ""}
                </Text>
                <Text style={{margin:10}}>
                    Phone: {doctorProfile ? doctorProfile.phone : ""}
                </Text>
                <Text style = {{margin:10}}>
                    Bio: {doctorProfile? doctorProfile.bio: ""}
                </Text>
                <Text style = {{margin:10}}>
                    Price: {doctorProfile ? doctorProfile.price: ""}
                </Text>
            </View>
            <View style= {{marginTop:40}}>
                <Button title="Edit Profile" onPress={() => navigation.navigate("EditDoctorProfile", {doctorProfile:doctorProfile})}/>
            </View>
            <View style= {{marginTop:20}}>
                <Button title="Logout" onPress={() => [
                    AsyncStorage.removeItem("jwt"),
                    logOutDoctor(context.dispatchDoctor)
                ]} />
            </View>
       </ScrollView>
    )
}

export default DoctorProfile;