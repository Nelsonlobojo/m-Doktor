
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
// screens
import {
    OnBoarding,
    Login,
} from "./app/screens/"; 


import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import SharedHeader from './app/shared/SharedHeader';

// screen for stack & tabs
const Stack = createStackNavigator();
const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black" : require('./app/assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold" : require('./app/assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular" : require('./app/assets/fonts/Roboto-Regular.ttf'),
    })

    if(!loaded){
        return null;
    }

    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor="#0682FE" />
            <Stack.Navigator>
                {/* Onboarding screen */}
                <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerTitle: () => <SharedHeader/> }} />
        
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default () => {
    return <App />;
};