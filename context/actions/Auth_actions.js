import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from "react-native-toast-message";

import baseUrl from "../../app/common/baseurl"

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const SET_CURRENT_DOCTOR = 'SET_CURRENT_DOCTOR';

export const loginUser =  (user,dispatchUser) => {
    fetch (`${baseUrl}users/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data) => {
        if(data){
            const token  = data.token;
            AsyncStorage.setItem('jwtToken',token);
            const decoded = jwt_decode(token);
            dispatchUser(setCurrentUser(decoded,user));
        }else{
            logOutUser(dispatchUser);
        }
    })
    .catch((error) => {
        Toast.show({
            topOffset: 60,
            type: 'error',
            text1: 'Provide valid credentials',
            text2: ''
        })
        console.log(error);
        logOutUser(dispatchUser)
    })
}

export const loginDoctor = async (doctor,dispatchDoctor) => {
   await fetch (`${baseUrl}doctors/login`, {
        method: 'POST',
        body: JSON.stringify(doctor),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data) => {
        if(data){
            const token  = data.token;
            AsyncStorage.setItem('jwt',token);
            const decodedDoctor = jwt_decode(token);
            dispatchDoctor(setCurrentDoctor(decodedDoctor,doctor));
        }else{
            logOutDoctor(dispatchDoctor);
        }
    })
    .catch((error) => {
        Toast.show({
            topOffset: 60,
            type: 'error',
            text1: 'Provide valid credentials',
            text2: ''
        })
        console.log(error);
        logOutDoctor(dispatchDoctor)
    })
}

export const  getUserProfile = async (id) => {
    await fetch (`${baseUrl}users/${id}`, {
        method: 'GET',
        body: JSON.stringify(user),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error);
    })
}

export const getDoctorProfile = async (id) => {
   await fetch (`${baseUrl}doctors/${id}`, {
        method: 'GET',
        body: JSON.stringify(doctor),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error);
    })
}

export const logOutUser = (dispatchUser) => {
    AsyncStorage.removeItem('jwtToken');
    dispatchUser(setCurrentUser({}))
}

export const logOutDoctor = (dispatchDoctor) => {
    AsyncStorage.removeItem('jwt');
    dispatchDoctor(setCurrentDoctor({}))
}

export const setCurrentUser = (decoded, user) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
        userProfile: user
    }
}

export const setCurrentDoctor = (decodedDoctor, doctor) => {
    return {
        type: SET_CURRENT_DOCTOR,
        payload: decodedDoctor,
        doctorProfile: doctor
    }
}