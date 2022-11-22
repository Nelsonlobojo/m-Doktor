import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

// import Screens
import AppointmentNavigator from "./AppointmentNavigator";
import NewsNavigator from "./NewsNavigator";

function MyTabs() {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Completed" component={AppointmentNavigator} />
        <Tab.Screen name="Pending" component={NewsNavigator} />
        </Tab.Navigator>
    );
}

export default function Completed_PendingNavigator(props) {
    return <MyTabs />;
}