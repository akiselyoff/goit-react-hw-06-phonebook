import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import s from './containerApp.module.css';

export const App = () => {
  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     // setContacts(parsedContacts);
  //     dispatch(addContact(parsedContacts));
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const contactDelete = id => {
  //   // setContacts(state => state.filter(contact => contact.id !== id));
  //   dispatch(deleteContact({ id }));
  // };

  return (
    <div className={s.containerApp}>
      <h1>Phone Book</h1>
      <ContactForm />
      <div className={s.containerContacts}>
        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </div>
    </div>
  );
};
