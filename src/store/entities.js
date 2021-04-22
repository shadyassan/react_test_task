import { combineReducers } from '@reduxjs/toolkit';
import posts from './posts';
import comments from './comments';
import users from './users';

export default combineReducers({ posts, comments, users });
