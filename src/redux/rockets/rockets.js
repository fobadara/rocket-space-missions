// The only solution here is to disable eslint
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk(
  'rocket-space-missions/rockets/fetchRockets', () => {
    const response = fetch('https://api.spacexdata.com/v3/rockets')
      .then((response) => response.json())
      .then((data) => data.map((item) => ({
        id: item.id,
        rocket_name: item.rocket_name,
        description: item.description,
        flickr_images: item.flickr_images,
      })));
    return response;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: { rockets: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.rockets.push(action.payload);
      state.loading = 'idle';
    });
    builder.addCase(fetchRockets.rejected, (state) => {
      state.loading = 'rejected';
    });
  },
});

export const getAllRockets = (state) => state;

export default rocketsSlice.reducer;
