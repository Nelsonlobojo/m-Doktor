import React from "react";
import {View, Text, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";


const Payment = (props) => {
    const navigation = useNavigation();

    const appointment = props.route.params;

    const handlePayment = () => {
        let appointmentData = {
            
        };
    }

    return (
        <View>
            <Text>Payment</Text>
            <Button title="Pay" onPress={() => navigation.navigate("Appointment", {screen:"Success", params:{appointment:appointment}})} />
        <View style={{marginTop:60, alignSelf:'center'}}>
            
        </View>
        </View>
        
    )
}

export default Payment;