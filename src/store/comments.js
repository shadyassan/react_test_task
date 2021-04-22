import { createSlice } from '@reduxjs/toolkit';
import { fetchCommentsById } from '../api/commentsApi';

const slice = createSlice({
  name: 'comments',
  initialState: {
    items: [],
    error: null,
  },
  reducers: {
    commentsReceived: (state, action) => {
      state.items = action.payload;
    },
    onError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default slice.reducer;

export const { commentsReceived, onError } = slice.actions;

export const getCommentsById = (id) => async (dispatch) => {
  try {
    const posts = await fetchAll(id);
    dispatch(fetchCommentsById(posts));
  } catch (err) {
    dispatch(onError(err));
    throw err;
  } finally {
  }
};
