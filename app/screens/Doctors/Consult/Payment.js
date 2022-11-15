import React from "react";
import {View, Text, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";


const Payment = (props) => {

    const navigation = useNavigation();

    const appointment = props.route.params.appointment;

    return (
        <View>
            <Text>Payment</Text>
        <View style={{marginTop:60, alignSelf:'center'}}>
            
        </View>
        </View>
        
    )
}

export default Payment;