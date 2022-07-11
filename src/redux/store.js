import { configureStore } from '@reduxjs/toolkit';

const contactsReducer = (state = {}, action) => state;

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
