import { Platform } from "react-native";

//let baseUrl = 'https://m-doktor-backend.herokuapp.com/api/v1/'

// let baseUrl = ''

 {Platform.OS === 'android' ? 
    baseUrl = 'https://bf5e-197-232-51-17.in.ngrok.io/api/v1/' :
    baseUrl = 'https://bf5e-197-232-51-17.in.ngrok.io/api/v1/'
}

export default baseUrl;