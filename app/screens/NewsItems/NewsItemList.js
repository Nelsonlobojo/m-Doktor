import React from "react";
import { TouchableOpacity, Dimensions, View} from "react-native";

import NewsItemCard from "./NewsItemCard";
var {height, width} = Dimensions.get('window');

const NewsItemList = (props) => {
    const {item, searchPhrase, setClicked} = props; 

    return (
        <TouchableOpacity style={{width: '50%'}} >
            <View style={{width: width, backgroundColor:'white'}}>

                <NewsItemCard {...item} />

            </View>
        </TouchableOpacity>
    )
}

export default NewsItemList;