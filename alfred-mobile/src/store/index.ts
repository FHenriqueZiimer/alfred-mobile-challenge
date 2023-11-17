import { configureStore } from '@reduxjs/toolkit';
import { FavListPatients } from './reducers/FavListPatients';

const store = configureStore({
  reducer: {
    datas: FavListPatients.reducer,
  }
});

export default store;
