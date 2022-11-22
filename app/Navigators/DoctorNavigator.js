import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import DoctorProfile from "../screens/Users/DoctorProfile";
import DoctorRegister from "../screens/Users/DoctorRegister";
import DoctorLogin from "../screens/Users/DoctorLogin";
import EditDoctorProfile from "../screens/Users/EditDoctorProfile";

const Stack = createStackNavigator();

function MyStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DoctorLogin" component={DoctorLogin} options= {{
                headerShown: false
            }} />
            <Stack.Screen name="DoctorRegister" component={DoctorRegister} options={{headerShown: false}} />
            <Stack.Screen name="Doctor-Profile" component={DoctorProfile} options={{headerShown: false}} />
            <Stack.Screen name="EditDoctorProfile" component={EditDoctorProfile} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default function DoctorNavigator () {
    return <MyStack />
}