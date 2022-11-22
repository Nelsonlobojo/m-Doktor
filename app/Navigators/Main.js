import React, {useContext} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

// AuthGlobal.js
import AuthGlobal from "../../context/store/AuthGlobal";

// my Stacks
import NewsNavigator from "./NewsNavigator";
import HomeNavigator from "./HomeNavigator";
import UserNavigator from "./UserNavigator";
import Completed_PendingNavigator from "./Completed_Pending";

const Tab = createBottomTabNavigator();

const Main = () => {

    const context = useContext(AuthGlobal);

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
            {context.stateUser.isAuthenticated ? (
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
            ): null}
            {context.stateUser.isAuthenticated ? (
                 <Tab.Screen
                 name="Schedule"
                 component={Completed_PendingNavigator}
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
            ): null}
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
            <Tab.Screen
                name="User"
                component={UserNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="user" 
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
      