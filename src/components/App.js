import './App.css';
import Header from './Header';
import ContactCard from './ContactCard';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
const contacts = [
  {
    id : "1",
    "name" : "abc",
    "email" : "abc@gmail.com"
  },
  {
    id : "2",
    "name" : "bcd",
    "email" : "bcd@gmail.com"
  },
  {
    id : "3",
    "name" : "cde",
    "email" : "cde@gmail.com"
  },
]

  return (
    <div className = "ui container">
    <Header/>
    <AddContact/>
    <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
