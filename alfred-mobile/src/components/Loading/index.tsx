import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { Colors } from '../../styles/colors';

function LoadingSpinner () {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.secondary} />
    </View>
  );
};

export { LoadingSpinner }