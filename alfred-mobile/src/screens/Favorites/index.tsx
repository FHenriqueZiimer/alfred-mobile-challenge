import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { PatientList, LoadingSpinner, Header } from '../../components/components';
import { Patient } from '../../models/patientDTO';
import { HomeStyles } from './styles';
import { RootState } from '../../models/stateDTO';


export function Favorite() {
  const favorites = useSelector((state: RootState) => state.datas.favorites);
  const isLoading = useSelector((state: RootState) => state.datas.loading);
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);
  const [filteredResults, setFilteredResults] = useState<Patient[]>(favorites);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  useEffect(() => {
    if (!searchTerm) {
      setFilteredResults(favorites);
    } else {
      const filtered = favorites.filter((patient: Patient) =>
        patient.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.name.last.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.location.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.dob.age.toString().includes(searchTerm)
      );
      setFilteredResults(filtered);
    }
  }, [searchTerm, favorites]);

  return (
    <View style={HomeStyles.container}>
      <Header handleSearch={handleSearch} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <PatientList result={filteredResults} />
        </>
      )}
    </View>
  );
}
