import React, {useState, useEffect} from "react";
import {Image, StyleSheet, Dimensions, View, ScrollView} from "react-native";
import Swiper from "react-native-swiper/src";

var {width} = Dimensions.get('window');

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        setBannerData([
            "https://images.unsplash.com/photo-1593642532972-7d8a1d4b0b5a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyJTIwYmFsbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            "https://images.unsplash.com/photo-1593642532972-7d8a1d4b0b5a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyJTIwYmFsbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            "https://images.unsplash.com/photo-1593642532972-7d8a1d4b0b5a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyJTIwYmFsbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        ]);
        return () => {
            setBannerData([]);
        }
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
            <View style= {styles.swiper}>
                <Swiper
                    style = {{height: width/2}}
                    showsButtons={false}
                    autoplay={true}
                    autoplayTimeout={2}
                >
                    {bannerData.map((item) => {
                        return (
                            <Image 
                              key={item}
                              style ={styles.imageBanner}
                              resizeMode="contain"
                              source={{uri: item}}
                            />
                        )
                    })}
                </Swiper>
                <View style={{height:20}}>

                </View>
            </View>
        </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: width/2,
        backgroundColor: "white"
    },
    swiper: {
        width: width,
        alignItems: "center",
    },
    imageBanner: {
        height: width/2,
        width: width -40,
        borderRadius: 10,
        marginHorizontal: 20,
    }
});

export default Banner;