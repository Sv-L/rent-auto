import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalog, fetchSelectedMake } from './operations';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
    selectedMakeArr: [],
    isLoading: false,
    error: null,
    disablet: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCatalog.pending, (state, action) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;

        const newItems = action.payload.filter(
          newItem => !state.items.some(({ id }) => id === newItem.id)
        );

        state.items = [...state.items, ...newItems];

        if (action.payload.length < 12) {
          state.disablet = true;
        }
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchSelectedMake.pending, (state, action) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchSelectedMake.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.selectedMakeArr = [...action.payload];
      })
      .addCase(fetchSelectedMake.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
