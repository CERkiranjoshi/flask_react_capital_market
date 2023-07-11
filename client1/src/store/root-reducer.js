import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from './counter/counter.reducer';

export const rootReducer = combineReducers({
  counter: counterReducer
});
