import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65cd1285dd519126b84011bd.mockapi.io/';

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchAll',
  async ({ page }, { rejectWithValue }) => {
    const params = { limit: 12, page}
    try {
      const response = await axios.get('/advert', { params });
        if (response.statusText === 'OK') {
        return response.data;
      } else {
        throw new Error();
      }
    } catch (error) {
      return rejectWithValue(
        'Error: An error occurred while fetching catalog'
      );
    }
  }
);

export const fetchSelectedMake = createAsyncThunk(
  'catalog/fetchMake',
  async ({ make }, { rejectWithValue }) => {
    const params = { make }

    try {
      const response = await axios.get('/advert', { params });
        if (response.statusText === 'OK') {
        return response.data;
      } else {
        throw new Error();
      }
    } catch (error) {
      return rejectWithValue(
        'Error: An error occurred while fetching catalog'
      );
    }
  }
);