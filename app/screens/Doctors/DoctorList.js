import React from "react";
import { TouchableOpacity, Dimensions, View} from "react-native";
import { useNavigation } from "@react-navigation/native";

import DoctorCard from "./DoctorCard";
var {width} = Dimensions.get('window');

const DoctorList = (props) => {
    const navigation = useNavigation();
    const {item} = props;

    return (
        <TouchableOpacity style={{width: '50%'}} 
            onPress={() => navigation.navigate("Doctor", {item: item})}
            >
            <View style={{width: width, backgroundColor:'white'}}>

                <DoctorCard {...item} />

            </View>
        </TouchableOpacity>
    )
}

export default DoctorList;