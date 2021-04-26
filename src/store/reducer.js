import { combineReducers } from '@reduxjs/toolkit';
import entities from './entities';
import filter from './filter';
import apiStatus from './apiStatus';

export default combineReducers({ entities, filter, apiStatus });
