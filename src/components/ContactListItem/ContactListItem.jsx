import React from 'react';
import { Container } from './ContactListItem.styled';
import { toast } from 'react-hot-toast';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const isFetching = useSelector(selectIsLoading);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    toast.error('Delete contact successfully');
  };

  return (
    <Container>
      <p>
        {contact.name}: {contact.number}{' '}
      </p>
      <button onClick={() => handleDeleteContact(contact.id)} disabled={isFetching}>
        {/* {isFetching && <Spinner size={12} />} */}
        Delete
      </button>
    </Container>
  );
};

export default ContactListItem;
