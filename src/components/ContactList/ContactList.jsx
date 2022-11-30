import { useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';

import { renderFilteredContact } from 'components/App/helpers';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

import { Wrapper } from './ContactList.styled';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = renderFilteredContact(contacts, filter);
  return (
    <Wrapper>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id} name={name} number={number} id={id} />
      ))}
    </Wrapper>
  );
};
