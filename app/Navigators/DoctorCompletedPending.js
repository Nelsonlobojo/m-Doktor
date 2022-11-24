import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

// import Screens
import DoctorAppointmentNavigator from "./DoctorAppointmentNavigator";
import DoctorUpcomingNavigator from "./DoctorUpcomingNavigator";

function MyTabs() {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Upcoming" component={DoctorAppointmentNavigator} />
        <Tab.Screen name="Completed" component={DoctorUpcomingNavigator} />
        </Tab.Navigator>
    );
}

export default function DoctorCompletedPendingNavigator(props) {
    return <MyTabs />;
}