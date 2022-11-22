import React, {useContext, useState, useEffect} from "react";
import { View, Text, Button, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";

import axios from "axios";
import baseUrl from "../../common/baseurl";

import AuthGlobal from "../../../context/store/AuthGlobal";
import {logOutUser} from "../../../context/actions/Auth_actions";

const UserProfile = (props) => {
    const context = useContext(AuthGlobal);
    const [userProfile, setUserProfile] = useState();
    const navigation = useNavigation();

    useFocusEffect(
        React.useCallback(() => {
            if(context.stateUser.isAuthenticated === false || context.stateUser.isAuthenticated === null) {
                navigation.navigate("UserLogin");
            }
            AsyncStorage.getItem("jwtToken")
            .then((res) => {
                axios.get(`${baseUrl}users/${context.stateUser.user.userId}`, {
                    headers: {Authorization: `Bearer ${res}`}
                })
                .then((user) => {
                    setUserProfile(user.data);
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error))
    
            return () => {
                setUserProfile();
            }
        }, [context.stateUser.isAuthenticated])
    )

    return (
        <ScrollView>
            <Text style={{fontSize:30}}>{userProfile ? userProfile.name : ""}</Text>
            <View style={{marginTop: 20}}>
                <Text style={{margin:10}}> 
                 Email: {userProfile ? userProfile.email : ""}
                </Text>
                <Text style={{margin:10}}> 
                 Phone: {userProfile ? userProfile.phone : ""}
                </Text>
            </View>
            <View style={{marginTop: 40}}>
                <Button title ="Edit Profile" onPress={() => navigation.navigate("EditUserProfile",{userProfile:userProfile})}/>
            </View>
            <View style= {{marginTop:20}}>
                <Button title="Logout" onPress={() => [
                    AsyncStorage.removeItem("jwtToken"),
                    logOutUser(context.dispatchUser)
                ]} />
            </View>
        </ScrollView>
    )
}

export default UserProfile;