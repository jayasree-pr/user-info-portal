import './App.css';
import React,{useEffect, useState} from 'react';
import Header from './Header';
import ContactCard from './ContactCard';
import ContactList from './ContactList';
import AddContact from './AddContact';
import {uuid} from 'uuidv4';

function App() {
const [contacts,setContacts]=useState([]);
const LOCAL_STORAGE_KEY = "contacts";

const AddContactHandler=(contact)=>{
console.log(contact);
setContacts([...contacts,{id:uuid(), ...contact}]);
};

const removeContact = (id) => {
  const newContactList = contacts.filter((contact) =>{
  return  contacts.id !== id;
  })
  setContacts(newContactList);
}

useEffect(()=>{
  const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retrieveContact) setContacts(retrieveContact);
},[]);


useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
},[contacts]);

  return (
    <div className = "ui container">
    <Header/>
    <AddContact AddContactHandler={AddContactHandler}/>
    <ContactList contacts = {contacts} getContactId={removeContact}/>
    </div>
  );
}

export default App;
