import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { fetchPlatesData } from '../services/api';

interface HomeState {
  plates: Array<any>;
}

const initialState: HomeState = {
  plates: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    fetchPlates: (state, action: PayloadAction<number>) => {
      const data = fetchPlatesData(action.payload);
      console.log('fetchPlates:', action);
      state.plates = [...state.plates, ...data];
    },
  },
});

export const { fetchPlates } = homeSlice.actions;
export const plates = (state: RootState) => state.home.plates;

export default homeSlice.reducer;
