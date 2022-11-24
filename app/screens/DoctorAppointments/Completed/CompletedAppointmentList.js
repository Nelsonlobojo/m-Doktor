import React, {useState} from 'react'
import { TouchableOpacity, Dimensions, View, Modal, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EasyButton from "../../../shared/StyledComponents/EasyButton";

import CompletedAppointmentCard from './CompletedAppointmentCard';
var {  width } = Dimensions.get('window')


const CompletedAppointmentList = (props) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { item } = props;

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}
      >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false); 
                }}
                style={{
                  alignSelf: "flex-end",
                  position: "absolute",
                  top: 5,
                  right: 10,
                }}
              >
                <Icon name="close" size={30} color="red" />
              </TouchableOpacity>
              <EasyButton medium secondary
                onPress={() => {[navigation.navigate("EditAppointment", {item: item}), 
                setModalVisible(false)]}}
              >
                <Text style={{color: "white", fontWeight:"bold"}}>Edit</Text>
              </EasyButton>
              <EasyButton 
              medium 
              danger
              onPress={() => [props.delete(item._id), setModalVisible(false)]}
              >
                <Text style={{color: "white", fontWeight:"bold"}}>Cancel</Text>
              </EasyButton>
            </View>
        </View>
      </Modal>
    <TouchableOpacity style={{ width: '50%' }}
      onPress={() => navigation.navigate('SingleAppointment', { item: item })}
      onLongPress={() => setModalVisible(true)}
    >
      <View style={{width:width, backgroundColor:"white"}}>
        <CompletedAppointmentCard {...item} />
      </View>

    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
})


export default CompletedAppointmentList
