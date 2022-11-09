import React from "react";
import { TouchableOpacity, Dimensions, View} from "react-native";
import { useNavigation } from "@react-navigation/native";


import NewsItemCard from "./NewsItemCard";
var {width} = Dimensions.get('window');

const NewsItemList = (props) => {
    const navigation = useNavigation();
    const {item} = props; 

    return (
        <TouchableOpacity style={{width: '50%'}} 
            onPress={() => navigation.navigate("News Detail", {item: item})}
            >
            <View style={{width: width, backgroundColor:'white'}}>

                <NewsItemCard {...item} />

            </View>
        </TouchableOpacity>
    )
}

export default NewsItemList;