import './App.css';
import React,{useEffect, useState} from 'react';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
  return  contact.id !== id;
  });
  setContacts(newContactList);
};

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
    <Router>
      <Switch>
        <Route exact path='/' render={(props)=>(<ContactList {...props} contacts = {contacts} getContactId={removeContact}/>)} />
        <Route path='/add' render = {(props)=>(<AddContact {...props} AddContactHandler={AddContactHandler} />)}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
