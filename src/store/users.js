import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../api/usersApi';

const slice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    usersError: null,
  },
  reducers: {
    usersReceived: (state, action) => {
      state.items = action.payload;
    },
    onError: (state, action) => {
      state.usersError = action.payload;
    },
  },
});

export default slice.reducer;
export const { usersReceived, onError } = slice.actions;

export const getUsers = () => async (dispatch) => {
  try {
    const users = await fetchUsers();
    dispatch(usersReceived(users));
  } catch (err) {
    dispatch(onError(err));
    throw err;
  }
};
