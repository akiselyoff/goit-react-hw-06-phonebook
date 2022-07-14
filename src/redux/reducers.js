import { createSlice, combineReducers } from '@reduxjs/toolkit';

export const items = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact(state, { payload }) {
      state.push(payload);
    },
    deleteContact(state, { payload }) {
      state.filter(({ id }) => id !== payload);
    },
  },
});

export const filter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, { payload }) {
      return payload;
    },
  },
});

export const { addContact, deleteContact } = items.actions;
export const { changeFilter } = filter.actions;

export default combineReducers({
  items: items.reducer,
  filter: filter.reducer,
});

// const items = createReducer([], {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [deleteContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filter = createReducer('', {
//   [changeFilter]: (state, { payload }) => payload,
// });

// export default combineReducers({ items, filter });

// export const items = createSlice({
//   name: 'items',
//   initialState: [],
//   reduces: {
//     addContact(state, { payload }) {
//       state = state.push(payload);
//     },
//     deleteContact(state, { payload }) {
//       // state.filter(({ id }) => id !== payload);
//       state = state.filter(({ id }) => id !== payload);
//     },
//   },
// });
