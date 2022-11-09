import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import NewsItemPage from "../screens/NewsItems/NewsItemPage";

import SingleNewsItem from "../screens/NewsItems/SingleNewsItem";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="News Home"
                component={NewsItemPage}
                options = {{headerShown:false}}
            />
             <Stack.Screen 
                name="News Detail"
                component={SingleNewsItem}
                options = {{headerShown:false}}
            />
        </Stack.Navigator>
        
    )
}

export default function NewsNavigator () {
    return <MyStack />
} 