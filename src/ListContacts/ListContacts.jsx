import React, { useContext, useEffect } from 'react';
import ContactCard from '../Card/ContactCard';
import { ContactsContext } from '../contexts/ContactsContext';

const ListContacts = () => {
    const {getContacts, contacts} = useContext(ContactsContext)
    useEffect(() => {
        getContacts();
    }, [])
    // console.log(contacts);
    return (
        <div className="d-flex justify-content-center flex-wrap">
            <h5 style={{marginTop:"10px", marginLeft:"50px", marginRight:"20px"}}>Contacts List</h5>
         {contacts.map((item, index) => (
             <ContactCard key={index} item={item} />
         ))}
        </div>
    );
};

export default ListContacts; 