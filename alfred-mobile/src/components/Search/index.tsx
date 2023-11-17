import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchStyles } from './styles';

interface SearchBarProps {
  onChange: (text: string) => void;
}

function SearchBar({ onChange }: SearchBarProps) {
  return (
    <View style={SearchStyles.container}>
      <View style={SearchStyles.searchContainer}>
        <Icon name="search" size={20} color="#777" style={SearchStyles.searchIcon} />
        <TextInput
          style={SearchStyles.input}
          placeholder="Pesquise Pacientes..."
          placeholderTextColor="#777"
          onChangeText={onChange}
          accessibilityLabel="Pesquisar Pacientes"
        />
      </View>
    </View>
  );
}

export { SearchBar };
