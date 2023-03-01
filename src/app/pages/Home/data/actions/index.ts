import * as Type from '../types';

export const fetchPlates = (page: number) => {
  return {
    type: Type.FETCH_HOME_PLATE,
    page,
  };
};

export const setPlatesData = (data: Array<any>) => {
  return {
    type: Type.FILL_HOME_PLATE_DATA,
    data,
  };
};

export const setHomeLoading = (isLoading: boolean) => {
  return {
    type: Type.SET_HOME_LOADING,
    isLoading,
  };
};
