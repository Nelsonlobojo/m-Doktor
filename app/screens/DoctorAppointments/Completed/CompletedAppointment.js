import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import CompletedAppointmentList from "./CompletedAppointmentList";
import SearchBar from "../../../shared/SearchBarTheme";
import baseUrl from "../../../common/baseurl";

import AuthGlobal from "../../../../context/store/AuthGlobal";

const CompletedAppointment = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const context = useContext(AuthGlobal);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      if (
        context.stateDoctor.isAuthenticated === false ||
        context.stateDoctor.isAuthenticated === null
      ) {
        navigation.navigate("Login");
      }
      AsyncStorage.getItem("jwt")
        .then((res) => {
          axios
            .get(
              `${baseUrl}appointments/doctorappointments/pending/${context.stateDoctor.doctor.doctorId}`,
              {
                headers: { Authorization: `Bearer ${res}` },
              }
            )
            .then((user) => {
              setAppointments(user.data);
              setLoading(false);
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));

      return () => {
        setAppointments([]);
      }
    }, [context.stateDoctor.isAuthenticated])
  )

  const deleteAppointment = (id) => {
    AsyncStorage.getItem("jwt")
      .then((res) => {
        axios
          .delete(`${baseUrl}appointments/${id}`, {
            headers: { Authorization: `Bearer ${res}` },
          })
          .then((res) => {
            const newAppointments = appointments.filter(
              (item) => item._id !== id
            );
            setAppointments(newAppointments);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return (
        <CompletedAppointmentList item={item} delete={deleteAppointment} />
      );
    }
    // filter of the title
    if (
      item.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <CompletedAppointmentList item={item} />;
    }
  };

  return (
    <>
      {loading == false ? (
        <View style={styles.container}>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
          <View style={styles.listContainer}>
            <FlatList data={appointments} renderItem={renderItem} />
          </View>
        </View>
      ) : (
        <View style={[styles.center, { backgroundColor: "#f2f2f2" }]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
  },
  listContainer: {
    width: "100%",
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
});

export default CompletedAppointment;
