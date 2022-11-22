import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import UserProfile from "../screens/Users/UserProfile";
import UserRegister from "../screens/Users/UserRegister";
import UserLogin from "../screens/Users/UserLogin";
import EditUserProfile from "../screens/Users/EditUserProfile";
import DoctorNavigator from "./DoctorNavigator";

const Stack = createStackNavigator();

function MyStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="UserLogin" component={UserLogin} options= {{
                headerShown: false
            }} />
            <Stack.Screen name="UserRegister" component={UserRegister} options={{headerShown: false}} />
            <Stack.Screen name="UserProfile" component={UserProfile} options={{headerShown:false}}/>
            <Stack.Screen name="EditUserProfile" component={EditUserProfile} options={{headerShown:false}}/>
            <Stack.Screen name= "Doctor" component={DoctorNavigator} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

export default function UserNavigator () {
    return <MyStack />
}