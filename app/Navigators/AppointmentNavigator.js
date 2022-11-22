import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import Completed from "../screens/Appointments/Completed/Completed";
import SingleAppointment from "../screens/Appointments/Completed/SingleAppointment";
import EditAppointment from '../screens/Appointments/Completed/EditAppointment';

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

        </Stack.Navigator>
    
    )
}

export default function AppointmentNavigator() {
    return <MyStack />
}