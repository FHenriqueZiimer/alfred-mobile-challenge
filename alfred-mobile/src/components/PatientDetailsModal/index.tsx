import React from 'react';
import translateGender from '../../utils/translateGender';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import { Patient } from '../../models/patientDTO';
import { RootState } from '../../models/stateDTO';
import { styles } from './styles';
import { Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { addFav, removeFav } from '../../store/reducers/FavListPatients';

interface PatientDetailsModalProps {
  isVisible: boolean;
  patient: Patient;
  onClose: () => void;
}

function PatientDetailsModal({ isVisible, patient, onClose }: PatientDetailsModalProps) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.datas.favorites);
  const navigation = useNavigation<NavigationProp<any>>();
  const isFav = favorites.some((fav: { login: { uuid: string; }; }) => fav.login.uuid === patient.login.uuid);

  const handleButton = () => {
    dispatch(isFav ? removeFav(patient.login.uuid) : addFav(patient));
  
    if (!isFav) {
      navigation.navigate('FAVORITOS');
    }
  };
  

  const renderFavButton = () => (
    <Button onPress={() => { onClose(); handleButton(); }} style={styles.addFavBtn}>
      {isFav ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
    </Button>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>
        <Image style={styles.modalThumbnail} source={{ uri: patient.picture.large }} />
        <View style={styles.modalDetails}>
          <Text style={styles.modalName}>{`${patient.name.first} ${patient.name.last}`}</Text>
          <Text>{`Idade: ${patient.dob.age}`}</Text>
          <Text>{`País: ${patient.location.country}`}</Text>
          <Text>{`Email: ${patient.email}`}</Text>
          <Text>{`Genero: ${translateGender(patient.gender)}`}</Text>
          <Text>{`Telefone: ${patient.cell}`}</Text>
          <Text>{`Endereço: ${patient.location.street.name}, ${patient.location.street.number}`}</Text>
          {renderFavButton()}
        </View>
      </View>
    </Modal>
  );
}

export { PatientDetailsModal };

