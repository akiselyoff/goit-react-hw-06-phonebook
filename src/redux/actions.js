import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contact/add', contact => ({
  payload: {
    id: nanoid(5),
    name: contact.name,
    number: contact.number,
  },
}));

export const deleteContact = createAction('contact/delete');

export const changeFilter = createAction('contact/changeFilter');
