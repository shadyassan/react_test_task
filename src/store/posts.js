import { createSlice } from '@reduxjs/toolkit';
import { fetchAll, postAdd, postDelete, postUpdate } from '../api/postsApi';
import { beginApiCall, apiCallSuccess } from './apiStatus';

const slice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    error: null,
  },
  reducers: {
    postAdding: (state, action) => {
      state.items.unshift(action.payload);
    },
    postUpdated: (state, action) => {
      const index = state.items.findIndex((c) => c.id === action.payload.id);
      state.items[index] = action.payload;
    },
    postsReceived: (state, action) => {
      const items = action.payload.map((item) => ({ ...item, edit: false }));
      state.items = items;
    },
    postDeleted: (state, action) => {
      const index = state.items.findIndex((c) => c.id === action.payload);
      state.items.splice(index, 1);
    },
    postEdit: (state, action) => {
      const post = state.items.find((c) => c.id === action.payload);
      post.edit = !post.edit;
    },
    onError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default slice.reducer;
export const {
  postAdding,
  postUpdated,
  postsReceived,
  postDeleted,
  onError,
} = slice.actions;

export const getPosts = () => async (dispatch) => {
  dispatch(beginApiCall());
  try {
    const posts = await fetchAll();
    dispatch(postsReceived(posts));
  } catch (err) {
    dispatch(onError(err));
    throw err;
  } finally {
    dispatch(apiCallSuccess());
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
    const savedPost = await postAdd(post);
    dispatch(postAdding(savedPost));
  } catch (err) {
    dispatch(onError(err));
    throw err;
  }
};

export const updatePost = (post) => async (dispatch) => {
  try {
    const savedPost = await postUpdate(post);
    dispatch(postUpdated(savedPost));
  } catch (err) {
    dispatch(onError(err));
    throw err;
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch(postDeleted(id));
  return postDelete(id);
};
