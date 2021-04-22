import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: 0,
};

const apiStatus = createSlice({
  name: 'apiStatus',
  initialState,
  reducers: {
    beginApiCall: (state, action) => {
      state.loading += 1;
    },
    apiCallSuccess: (state, action) => {
      state.loading -= 1;
    },
  },
});

export default apiStatus.reducer;
export const { beginApiCall, apiCallSuccess } = apiStatus.actions;
