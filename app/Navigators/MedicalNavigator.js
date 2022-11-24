import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import MedicalRecord from '../screens/MedicalRecord/MedicalRecord';

import SingleMedicalCard from '../screens/MedicalRecord/SingleMedicalCard';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Medical Record"
                component={MedicalRecord}
                options = {{headerShown:false}}
            />
             <Stack.Screen 
                name="Medical Card"
                component={SingleMedicalCard}
                options = {{headerShown:false}}
            />
        </Stack.Navigator>
        
    )
}

export default function MedicalNavigator () {
    return <MyStack />
}