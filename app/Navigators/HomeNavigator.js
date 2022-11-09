import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import DoctorPage from "../screens/Doctors/DoctorPage";

import SingleDoctor from "../screens/Doctors/SingleDoctor";

import ConsultNavigator from "./ConsultNavigator";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Doctors"
                component={DoctorPage}
                options = {{headerShown:false}}
            />
             <Stack.Screen 
                name="Doctor"
                component={SingleDoctor}
                options = {{headerShown:false}}
            />
             <Stack.Screen
                name="Appointment"
                component={ConsultNavigator}
                options = {{title: 'Appointment'}}
            />
        </Stack.Navigator>
        
    )
}

export default function HomeNavigator () {
    return <MyStack />
}