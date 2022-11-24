import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Completed from "../screens/DoctorAppointments/Completed/Completed";
import SingleAppointment from "../screens/DoctorAppointments/Completed/SingleAppointment";
import EditAppointment from '../screens/DoctorAppointments/Completed/EditAppointment';
import AddMedical from '../screens/DoctorAppointments/Completed/AddMedical';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen
            name="Completed-Appointment"
            component={Completed}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="SingleAppointment"
            component={SingleAppointment}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="EditAppointment"
            component={EditAppointment}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Add Medical"
            component={AddMedical}
            options={{ headerShown: false }}
        />
        </Stack.Navigator>
    
    )
}

export default function DoctorAppointmentNavigator() {
    return <MyStack />
}