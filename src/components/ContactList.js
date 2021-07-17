import React from 'react';

const ContactList = (props) =>{
    const rendercontactlist = props.contacts.map((contact)=>{
        return(
            <div className="item">
                <div className ="content ">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
                <i className="trash alternate icon "></i>
            </div>
        )
    })
    return(
        <div className = "ui celled list">{rendercontactlist}</div>
    )
}

export default ContactList;