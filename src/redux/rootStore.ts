import AsyncStorage from '@react-native-async-storage/async-storage';
import { AnyAction, CombinedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { rootReducer } from './rootReducers';
import thunkMiddleware from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  whitelist: ['common'],
};

const resettableAppReducer = (state: CombinedState<any>, action: AnyAction) => {
  return combineReducers(rootReducer)(state, action as any);
};

const persistedReducer = persistReducer(persistConfig, resettableAppReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunkMiddleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
