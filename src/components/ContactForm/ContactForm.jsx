import { getContacts } from 'redux/selectors';
import { addContacts } from 'redux/slices/contactsSlice';

import {
  Wrap,
  Form,
  InputWpap,
  Label,
  Input,
  Button,
} from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;

    const number = form.elements.number.value;

    for (const contact of contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase().trim()) {
        return alert(`${name} is already in contacts`);
      }
    }
    dispatch(addContacts(name, number));

    form.reset();
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <InputWpap>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputWpap>
        <InputWpap>
          <Label>Number</Label>
          <Input
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputWpap>
        <Button type="submit">Add contact</Button>
      </Form>
    </Wrap>
  );
};
