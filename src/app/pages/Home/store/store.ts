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
      console.log('fetchPlates:', action.payload);
      state.plates = [...state.plates, ...data];
    },
  },
});

export const { fetchPlates } = homeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
export const plates = (state: RootState) => state.home.plates;

export default homeSlice.reducer;
