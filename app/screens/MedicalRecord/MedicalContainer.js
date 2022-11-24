import React , {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator,Dimensions} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MedicalList from './MedicalList';
import AuthGlobal from "../../../context/store/AuthGlobal";
import SearchBarTheme from '../../shared/SearchBarTheme';
import baseUrl from '../../common/baseurl';


const MedicalContainer = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [medicalInfo, setMedicalInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const context = useContext(AuthGlobal);

   useFocusEffect(
        React.useCallback(() => {
            AsyncStorage.getItem('jwtToken').then((res) => {
                axios.get(`${baseUrl}records/user/${context.stateUser.user.userId}`,{
                    headers: {Authorization: `Bearer ${res}`}
                })
            .then(res => {
                setMedicalInfo(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
            });

            return () => {
                setMedicalInfo([]);
            }
        }, [])
   )

    const renderItem = ({ item }) => {
        // when no input, show all
        if (searchPhrase === "") {
          return <MedicalList item={item} />;
        }
        // filter of the title
        if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
          return <MedicalList item={item} />;
        }
      };

  return (
    <>
    {loading == false ? (
        <View style={styles.container}>
        <SearchBarTheme 
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
        />
        <View style={styles.listContainer}>
        <FlatList
            data={medicalInfo}
            renderItem={renderItem}
        />
        </View>
     </View> 
    ) : (
        <View style={[styles.center,{backgroundColor: "#f2f2f2"}]}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )}
    </>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
    },
    listContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#fff',

    },
});

export default MedicalContainer;