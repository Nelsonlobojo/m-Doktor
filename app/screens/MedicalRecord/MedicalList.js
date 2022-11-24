import React from "react";
import { TouchableOpacity, Dimensions, View} from "react-native";
import { useNavigation } from "@react-navigation/native";

import MedicalCard from "./MedicalCard";
var {width} = Dimensions.get('window');

const MedicalList = (props) => {
    const navigation = useNavigation();
    const {item} = props;

    return (
        <TouchableOpacity style={{width: '50%'}} 
            onPress={() => navigation.navigate("Medical Card", {item: item})}
            >
            <View style={{width: width, backgroundColor:'white'}}>

                <MedicalCard {...item} />

            </View>
        </TouchableOpacity>
    )
}

export default MedicalList;