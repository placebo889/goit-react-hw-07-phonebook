import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Container } from './App.styled';
import { Toaster } from 'react-hot-toast';

const App = () => {

  return (
    <Container>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
        }}
      />
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </Container>
  );
};

export default App;
