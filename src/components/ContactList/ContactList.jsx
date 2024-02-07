import React from 'react';
import ContactListItem from 'components/ContactListItem';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsList,
  selectContactsFilter,
  selectIsLoading,
  selectError,
} from '../../redux/selectors';

import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Spinner } from 'components/Spinner/Spinner';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);
  const isFetching = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {isFetching && <Spinner size={36} />}
      {error && (
        <p>
          Oops, something went wrong! <p>${error}</p>
        </p>
      )}
      {visibleContacts.length > 0 ? (
        <ul>
          {visibleContacts.map(contact => (
            <li key={contact.id}>
              <ContactListItem
                contact={contact}
                // onDeleteContact={handleDeleteContact}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};

export default ContactList;
