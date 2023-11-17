import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Patient, FavListPatientsState } from '../../models/patientDTO';

const initialState: FavListPatientsState = {
  favorites: []
};

export const FavListPatients = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<Patient>) => {
      const item = action.payload;
      state.favorites.push(item);
    },
    removeFav: (state, action: PayloadAction<string>) => {
      const data = action.payload;
      state.favorites = state.favorites.filter((e) => e.login.uuid != data);
    }
  },
});

export const { addFav, removeFav } = FavListPatients.actions;
export default FavListPatients.reducer;
