import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import Upcoming from "../screens/DoctorAppointments/Upcoming/Upcoming";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen
            name="Doctor-Upcoming-Appointment"
            component={Upcoming}
            options={{ headerShown: false }}
        />
        </Stack.Navigator>
    
    )
}

export default function DoctorUpcomingNavigator() {
    return <MyStack />
}