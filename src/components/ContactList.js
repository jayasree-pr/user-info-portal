import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) =>{
    const deleteHandler =(id)=>{
        props.getContactId(id);
    }

    const rendercontactlist = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHander = {deleteHandler} key = {contact.id}></ContactCard>
        );
    })
    return(
        <div className = "ui celled list">{rendercontactlist}</div>
    )
}

export default ContactList;