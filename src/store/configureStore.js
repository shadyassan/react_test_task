import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import localStorageMiddleware from './middlewares/localStorage';

const middleware = [...getDefaultMiddleware(), localStorageMiddleware];

const store = () => configureStore({ reducer, middleware });
export default store;
