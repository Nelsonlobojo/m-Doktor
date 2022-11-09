import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

// my Stacks
import NewsNavigator from "./NewsNavigator";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName="Consult"
            screenOptions={{
                "tabBarHideOnKeyboard": true,
                "tabBarActiveTintColor": "blue",
                tabBarShowLabel: true,
                headerShown: false,
                "tabBarStyle": [
                  {
                    "display": "flex"
                  },
                  null
                ]
            }}
        >
            <Tab.Screen
                name="Consult"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="stethoscope"
                        style = {{position: 'relative'}}
                        color={color}
                        size ={30} 
                         />
                    )
                }}
            />
            <Tab.Screen
                name="Record"
                component={NewsNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="id-card" 
                        style = {{position: 'relative'}}
                        color={color}
                        size ={30} 
                         />
                    )
                }}
            />
            <Tab.Screen
                name="Schedule"
                component={NewsNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="calendar" 
                        style = {{position: 'relative'}}
                        color={color}
                        size ={30} 
                         />
                    )
                }}
            />
            <Tab.Screen
                name="News"
                component={NewsNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="newspaper-o" 
                        style = {{position: 'relative'}}
                        color={color}
                        size ={30} 
                         />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default Main;
      