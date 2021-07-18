import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const ContactDetail = (props)=>{
    console.log(props);
    const {name,email} = props.location.state.contact;
    return(
    <div className="main">
        <div className="ui card centered">
        <div className="image">
            <img src ={user} alt="user"/>
            <div className="content" style={{textAlign:"center"}}>
                <div className="header"><b>{name}</b></div>
                <div>{email}</div>
            </div>
        </div>
        <div className ="center-div">
            <Link to='/'>
            <button className="ui button blue centered" style={{marginLeft:60}}>Back to ContactList</button>
            </Link>
        </div>
        </div>
    </div>
    )
}
export default ContactDetail;