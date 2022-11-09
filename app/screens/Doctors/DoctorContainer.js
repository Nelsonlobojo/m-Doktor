import React , {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator,Dimensions} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import { getAllDoctors } from '../../../redux/store/actions/FetchDoctors';

import DoctorList from './DoctorList';
import SearchBarTheme from '../../shared/SearchBarTheme';


const DoctorContainer = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDoctors());
    }, []);

    
    const doctors = useSelector(state => state.doctor.doctors);

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