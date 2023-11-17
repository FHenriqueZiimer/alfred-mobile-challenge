import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  details: {
    marginLeft: 20,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
