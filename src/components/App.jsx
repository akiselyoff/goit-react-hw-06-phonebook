import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
// import store from '../redux/store';
import { addContact } from '../redux/reducers';
import { getContacts } from '../redux/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import s from './containerApp.module.css';

export const App = () => {
  // const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      // setContacts(parsedContacts);
      dispatch(parsedContacts);
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    const filterNormalize = filter.toLowerCase();

    return contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(filterNormalize);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const formSubmit = ({ name, number }) => {
    const isContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContact) {
      toast.warn(`${name} is already in contact`, {
        theme: 'colored',
        autoClose: 4000,
        pauseOnHover: true,
        closeOnClick: true,
      });
    } else {
      dispatch(addContact({ id: nanoid(5), name, number }));
    }
  };

  const contactDelete = id => {
    // setContacts(state => state.filter(contact => contact.id !== id));
    dispatch(state => state.filter(contact => contact.id !== id));
  };

  return (
    <div className={s.containerApp}>
      <h1>Phone Book</h1>
      <ContactForm onSubmit={formSubmit} />
      <div className={s.containerContacts}>
        <h2>Contacts</h2>
        <Filter
          title="Find contact by name"
          onChange={handleFilterChange}
          value={filter}
        />

        <ContactList
          filteredContacts={filteredContacts()}
          onDelete={contactDelete}
        />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};
