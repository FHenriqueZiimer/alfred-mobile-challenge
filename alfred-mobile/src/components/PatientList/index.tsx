import React from 'react';
import { View, Text } from 'react-native';
import { Patient } from '../../models/patientDTO';
import { FlatList } from 'react-native';
import { PatientListItem } from '../PatientListItem'; 

interface PatientListProps {
  result: Patient[];
}

const renderEmptyList = () => (
  <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
    <Text>Nenhum paciente encontrado.</Text>
  </View>
);

const renderPatientItem = ({ item }: { item: Patient }) => (
  <PatientListItem patient={item} />
);

const PatientList: React.FC<PatientListProps> = ({ result }) => {
  if (!result || result.length === 0) {
    return renderEmptyList();
  }

  return (
    <FlatList
      data={result}
      keyExtractor={(item) => item.login.uuid}
      renderItem={renderPatientItem}
    />
  );
};

export { PatientList };
