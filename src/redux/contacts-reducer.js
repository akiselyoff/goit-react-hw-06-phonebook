// import { createReducer, combineReducers, createSlice } from '@reduxjs/toolkit';
import { combineReducers, createSlice } from '@reduxjs/toolkit';
// import { addContact, deleteContact, changeFilter } from './actions';

// const items = createReducer([], {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [deleteContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filter = createReducer('', {
//   [changeFilter]: (state, { payload }) => payload,
// });

// export default combineReducers({ items, filter });

const items = createSlice({
  name: 'items',
  initialState: [],
  addContact(state, { payload }) {
    return [...state, payload];
  },
  deleteContact(state, { payload }) {
    state.filter(({ id }) => id !== payload);
  },
});

const filter = createSlice({
  name: 'filter',
  initialState: '',
  changeFilter(state, { payload }) {
    return payload;
  },
});

export const { addContact } = items.actions;

export default combineReducers({ items, filter });
