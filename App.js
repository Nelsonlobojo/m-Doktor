
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import { LogBox } from 'react-native';
import  Toast  from 'react-native-toast-message';

//Navigators
import Main from './app/Navigators/Main';
import SharedHeader from './app/shared/SharedHeader';

// Context API
import Auth from './context/store/Auth';

import { useFonts } from 'expo-font';
const Stack = createStackNavigator();


// screen for stack & tabs
const App = () => {
    
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs();//Ignore all log notifications
    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
      ]);


    return (
        <Auth>
        <NavigationContainer>
          <SharedHeader />  
          <Main />
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
        </Auth>
    );
}

export default () => {
    return <App />;
};