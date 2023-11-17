import { Patient } from "./patientDTO";

export interface RootState {
  datas: {
    favorites: Patient[];
    loading: boolean;
  };
}