import { configureStore, combineReducers } from '@reduxjs/toolkit';
import catalogReducer from './slices/catalog';
import cartReducer from './slices/cart';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;