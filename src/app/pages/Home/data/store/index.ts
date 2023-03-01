import * as Type from '../types';

interface HomeState {
  plates: Array<any>;
}

const initialState: HomeState = {
  plates: [],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.FILL_HOME_PLATE_DATA: {
      const plates = [...state.plates, ...action.data];
      return { ...state, plates };
    }

    default:
      return state;
  }
};
