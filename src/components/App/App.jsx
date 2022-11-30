import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Wrap, TitleBook, ContactTitle, ContactWrap } from './App.styled';

export const App = () => {
  return (
    <Wrap>
      <TitleBook>Phonebook</TitleBook>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <ContactWrap>
        <Filter />
        <ContactsList />
      </ContactWrap>
    </Wrap>
  );
};
