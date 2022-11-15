import React , {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator,Dimensions} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

import DoctorList from './DoctorList';
import SearchBarTheme from '../../shared/SearchBarTheme';
import baseUrl from '../../common/baseurl';


const DoctorContainer = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

   useFocusEffect(
        React.useCallback(() => {
            axios.get(`${baseUrl}doctors`)
            .then(res => {
                setDoctors(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));

            return () => {
                setDoctors([]);
            }
        }, [])
   )

    const renderItem = ({ item }) => {
        // when no input, show all
        if (searchPhrase === "") {
          return <DoctorList item={item} />;
        }
        // filter of the title
        if (item.name.first.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
          return <DoctorList item={item} />;
        }
        if (item.name.last.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <DoctorList item={item} />;
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
            data={doctors}
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

export default DoctorContainer;