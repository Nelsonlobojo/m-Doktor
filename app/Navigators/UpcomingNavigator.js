import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import Upcoming from "../screens/Appointments/Upcoming/Upcoming";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen
            name="Upcoming-Appointment"
            component={Upcoming}
            options={{ headerShown: false }}
        />
        </Stack.Navigator>
    
    )
}

export default function UpcomingNavigator() {
    return <MyStack />
}