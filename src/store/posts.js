import { createSlice } from '@reduxjs/toolkit';
import { fetchAll } from '../api/postsApi';

const slice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    error: null,
  },
  reducers: {
    postAdd: (state, action) => {
      state.items.push(action.payload);
    },
    postsReceived: (state, action) => {
      state.items = action.payload;
    },
    onError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default slice.reducer;

export const { postsReceived, onError } = slice.actions;

export const getPosts = () => async (dispatch) => {
  try {
    const posts = await fetchAll();
    dispatch(postsReceived(posts));
  } catch (err) {
    dispatch(onError(err));
    throw err;
  } finally {
  }
};
