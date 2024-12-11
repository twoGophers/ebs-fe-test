import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/catalog';

interface CartState {
  items: Product[];
}

const loadCartFromLocalStorage = (): Product[] => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload);

        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);

      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeAllCart: (state) => {
      state.items = [];

      localStorage.removeItem('cart');
    },
  },
});

export const { addToCart, removeFromCart, removeAllCart } = cartSlice.actions;
export default cartSlice.reducer;
