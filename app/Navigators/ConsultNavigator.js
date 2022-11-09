import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

// import Screens
import AppointmentScreen from "../screens/Doctors/Consult/AppointmentScreen";
import Confirm from "../screens/Doctors/Consult/Confirm";
import Payment from "../screens/Doctors/Consult/Payment";


function MyTabs()  {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Date/Time" component={AppointmentScreen} />
            <Tab.Screen name="Payment" component={Payment} />
            <Tab.Screen name="Confirm" component={Confirm} />       
        </Tab.Navigator>
    )
}

export default function ConsultNavigator(props) {
    return <MyTabs />;
}