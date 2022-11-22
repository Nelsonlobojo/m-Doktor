import React, {useReducer, useEffect, useState,} from "react";
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Auth_reducers from "../reducers/Auth_reducers";
import Auth_doctors from "../reducers/Auth_doctors";
import { setCurrentUser, setCurrentDoctor } from "../actions/Auth_actions";
import AuthGlobal from "./AuthGlobal";

const Auth = (props) => {
    const [stateUser, dispatchUser] = useReducer(Auth_reducers, {
        isAuthenticated: null,
        user: {},
    });
    const [stateDoctor, dispatchDoctor] = useReducer(Auth_doctors, {
        isAuthenticated: null,
        doctor: {},
    });
    
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        setShowChild(true);
        if(AsyncStorage.jwtToken){
            const decoded = AsyncStorage.jwtToken ? AsyncStorage.jwtToken : '';
            if(setShowChild(true)){
                dispatchUser(setCurrentUser(jwt_decode(decoded)));  
            }
        }
        
        return () => setShowChild(false);
    }, []);

    useEffect(() => {
        setShowChild(true);
        if(AsyncStorage.jwt){
            const decoded1 = AsyncStorage.jwt ? AsyncStorage.jwt : '';
            if(setShowChild(true)){
                dispatchDoctor(setCurrentDoctor(jwt_decode(decoded1)));  
            }
        }
        
        return () => setShowChild(false);
    }, []);


    if(!showChild){
        return null;
    }
    else{
        return (
            <AuthGlobal.Provider value={{stateUser, dispatchUser, stateDoctor, dispatchDoctor}}>
                {props.children}
            </AuthGlobal.Provider>
        );
    }
}

export default Auth;