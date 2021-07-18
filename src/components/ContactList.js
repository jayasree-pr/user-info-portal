import React from 'react';
import {Link} from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) =>{
    const deleteHandler =(id)=>{
        props.getContactId(id);
    }

    const rendercontactlist = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHander = {deleteHandler } key = {contact.id}></ContactCard>
        );
    });
    return(
        <div className="main">
            <div className="header" style={{marginTop:50}}>
            <h2>Contact List</h2>
            <Link to ="/add">
            <button className="ui button blue right" >Add Contact</button>
            </Link>
            </div>
        <div className = "ui celled list">{rendercontactlist}</div>
        </div>
    )
}

export default ContactList;