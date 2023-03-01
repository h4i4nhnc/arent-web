import * as Type from '../types';

interface HomeState {
  isLoading?: Boolean;
  plates: Array<any>;
}

const initialState: HomeState = {
  isLoading: false,
  plates: [],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.SET_HOME_LOADING: {
      return { ...state, isLoading: action.isLoading };
    }
    case Type.FILL_HOME_PLATE_DATA: {
      const plates = [...state.plates, ...action.data];
      return { ...state, plates, isLoading: false };
    }

    default:
      return state;
  }
};
