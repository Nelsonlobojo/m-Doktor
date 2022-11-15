
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import { LogBox } from 'react-native';

//Navigators
import Main from './app/Navigators/Main';
import OnBoarding from './app/screens/OnBoarding/OnBoarding';
import SharedHeader from './app/shared/SharedHeader';



import { useFonts } from 'expo-font';
const Stack = createStackNavigator();


// screen for stack & tabs
const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black" : require('./app/assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold" : require('./app/assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular" : require('./app/assets/fonts/Roboto-Regular.ttf'),
    })

    if(!loaded){
        return null;
    }

    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs();//Ignore all log notifications
    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
      ]);


    return (
        <NavigationContainer>
          <SharedHeader />  
          <Main />
        </NavigationContainer>
    );
}

export default () => {
    return <App />;
};