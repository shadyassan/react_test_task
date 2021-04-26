import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    search: '',
    author: '',
  },
  reducers: {
    addSearch: (state, action) => {
      state.search = action.payload;
    },
    addFilter: (state, action) => {
      state.author = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { addSearch, addFilter } = filterSlice.actions;
