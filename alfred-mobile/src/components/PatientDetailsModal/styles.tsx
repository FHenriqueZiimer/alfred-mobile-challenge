import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  overlay: {
    flex: 0.7,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalContainer: {
    padding: 15,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: Colors.secondary
  },
  modalThumbnail: {
    borderWidth: 2,
    borderColor: 'black',
    position: 'absolute',
    width: 150,
    height: 150,
    top: -70,
    borderRadius: 100,
  },
  modalDetails: {
    height: '75%',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'flex-start',
    marginTop: 50,
  },
  modalName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addFavBtn: {
    alignSelf: 'center',
    height: 55,
    width: '70%',
    backgroundColor: Colors.secondary
  }
});

