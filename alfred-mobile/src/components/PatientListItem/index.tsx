import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Patient } from '../../models/patientDTO';
import { PatientDetailsModal } from '../PatientDetailsModal';
import { styles } from './styles';

interface PatientListItemProps {
  patient: Patient;
}

const PatientListItem: React.FC<PatientListItemProps> = memo(({ patient }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };


  return (

      <TouchableOpacity onPress={handlePress} style={styles.container}>
        <Image style={styles.thumbnail} source={{ uri: patient.picture.large }} />
        <View style={styles.details}>
          <Text style={styles.name}>{`${patient.name.first} ${patient.name.last}`}</Text>
          <Text>{`Idade: ${patient.dob.age}`}</Text>
          <Text>{`País: ${patient.location.country}`}</Text>
        </View>
        <PatientDetailsModal isVisible={modalVisible} patient={patient} onClose={handleCloseModal} />
      </TouchableOpacity>
  );
});

export { PatientListItem };
