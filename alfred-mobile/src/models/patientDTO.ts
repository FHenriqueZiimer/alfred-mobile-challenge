export interface Patient {
  login: {
    uuid: string;
  },
  gender: string;
  name: {
    first: string;
    last: string;
  };
  dob: {
    age: number;
  };
  location: {
    country: string;
    state: string;
    street: {
      name: string;
      number: number;
    }
  };
  cell: string;
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export interface FavListPatientsState {
  favorites: Patient[];
}