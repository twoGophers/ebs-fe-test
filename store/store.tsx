import { configureStore, combineReducers } from '@reduxjs/toolkit';
import catalogReducer from './slices/catalog';

const rootReducer = combineReducers({
  catalog: catalogReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;