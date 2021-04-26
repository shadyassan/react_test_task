import { createSlice } from '@reduxjs/toolkit';

const apiStatus = createSlice({
  name: 'apiStatus',
  initialState: {
    loading: 0,
  },
  reducers: {
    beginApiCall: (state) => {
      state.loading += 1;
    },
    apiCallSuccess: (state) => {
      state.loading -= 1;
    },
  },
});

export default apiStatus.reducer;
export const { beginApiCall, apiCallSuccess } = apiStatus.actions;
