import { useState } from 'react';
import { Button, Form, Input } from './ContactForm.styled';

import { toast } from 'react-hot-toast';
import { addContact } from '../../redux/contacts/operations';

import { useDispatch, useSelector } from 'react-redux';
import { selectContactsList, selectIsLoading } from '../../redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  const isFetching = useSelector(selectIsLoading);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = data => {
    if (isContactAlreadyExist(contacts, data)) {
      toast.error(`${data.name} is already in contact`);
      return;
    }
    dispatch(addContact(data));
    toast.success('Create new contact successfully');
  };

  const isContactAlreadyExist = (contacts, data) => {
    return contacts.find(contact => contact.name === data.name);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const createContact = e => {
    e.preventDefault();
    handleAddContact({
      name,
      number,
    });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={createContact}>
      <label htmlFor="name">Name</label>
      <Input
        type="text"
        name="name"
        id="name"
        required
        onChange={handleChange}
        placeholder="Enter name"
        value={name}
      />
      <label htmlFor="number">Number</label>
      <Input
        type="tel"
        name="number"
        id="number"
        required
        onChange={handleChange}
        placeholder="Enter number"
        value={number}
      />
      <Button type="submin" disabled={isFetching} >Add contact</Button>
    </Form>
  );
};

export default ContactForm;
