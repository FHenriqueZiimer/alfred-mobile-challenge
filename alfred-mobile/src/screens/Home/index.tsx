import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Patient } from '../../models/patientDTO';
import { useFetch } from '../../hooks/useFetch';
import { PatientList, LoadingSpinner, Header } from '../../components/components';
import { HomeStyles } from './styles';

export function Home() {
  const url = 'https://randomuser.me/api/?results=50&nat=br,us,fr';
  const { result, error, isLoading } = useFetch<Patient[]>(url);
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);
  const [filteredResults, setFilteredResults] = useState<Patient[]>(result);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  useEffect(() => {
    if (!searchTerm) {
      setFilteredResults(result);
    } else {
      const filtered = result.filter((patient: Patient) =>
        patient.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.name.last.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.location.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.dob.age.toString().includes(searchTerm)
      );
      setFilteredResults(filtered);
    }
  }, [searchTerm, result]);

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
