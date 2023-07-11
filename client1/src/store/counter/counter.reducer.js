import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  count: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    incremented(state, action) {
      state.count += 1
    },
    decremented(state, action) {
      state.count -= 1
    },
  }
});

export const { incremented , decremented } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
