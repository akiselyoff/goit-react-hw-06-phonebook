import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// const contactsReducer = (state = {}, action) => state;

const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});

export default store;
