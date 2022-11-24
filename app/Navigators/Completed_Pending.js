import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

// import Screens
import AppointmentNavigator from "./AppointmentNavigator";
import UpcomingNavigator from "./UpcomingNavigator";

function MyTabs() {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Upcoming" component={AppointmentNavigator} />
        <Tab.Screen name="Completed" component={UpcomingNavigator} />
        </Tab.Navigator>
    );
}

export default function Completed_PendingNavigator(props) {
    return <MyTabs />;
}