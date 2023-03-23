import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import ICommonState from './type';

const initialState: ICommonState = {
  loading: false,
};

export const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    resetAction: () => initialState,
  },
});

export const { reducer: commonReducer, actions: commonActions } = commonSlice;
const commonPersistConfig = {
  key: 'CommonReducer',
  storage: AsyncStorage,
  whitelist: [''],
};
export default persistReducer(commonPersistConfig, commonSlice.reducer);
