import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CatalogState } from '../../types/global'

const initialState: CatalogState = {
  catalog: [],
  status: null
};

export const getCatalog = createAsyncThunk(
  'catalog/getCatalog',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue('Ошибка загрузки данных');
    }
  }
);



const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCatalog.pending, (state) => {
        state.catalog = [];
        state.status = null;
      })
      .addCase(getCatalog.fulfilled, (state, action) => {
        state.catalog = action.payload.data;
        state.status = action.payload.status;
      })
      .addCase(getCatalog.rejected, (state) => {
        state.catalog = [];
        state.status = null;
      })
  },
});

export default catalogSlice.reducer;
