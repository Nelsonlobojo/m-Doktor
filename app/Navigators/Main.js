import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import NewsItemContainer from "../screens/NewsItems/NewsContainer";

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                keyboardHidesTabBar: true,
                showLabel: false,
                activeTintColor: "blue",
            }}
        >
            <Tab.Screen
                name="Home"
                component={NewsItemContainer}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" 
                        style = {{position: 'relative'}}
                        color={color}
                        size ={30} 
                         />
                    )
                }}
            />
            <Tab.Screen
                name="Record"
                component={NewsItemContainer}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="record" 
                        style = {{position: 'relative'}}
                        color={color}
                        size ={30} 
                         />
                    )
                }}
            />
            <Tab.Screen
                name="Schedule"
                component={NewsItemContainer}
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
                component={NewsItemContainer}
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
      