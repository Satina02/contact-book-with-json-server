import React, { useContext, useState } from 'react';
import { ContactsContext } from '../contexts/ContactsContext';
import {Link} from 'react-router-dom'

const AddContacts = () => {
    const [newContact, setNewContact] = useState({
        name: "",
        phone: "",
        email: "",
        image: "",
      });
      const { createContact } = useContext(ContactsContext) 
    
      function handleValues (e){
          let values = {
              ...newContact,
              [e.target.name]: e.target.value
          }
          setNewContact(values)
          console.log(values)
      }
      function checkVal(){
          if(!newContact.name || !newContact.phone ||!newContact.email
            ||!newContact.image){
                alert('Fill this place')
                return
            }else{
                createContact(newContact)}
      }
    return (
        <div className="container d-flex flex-column">
            <h4>Add New Contact</h4>
        <input
            value={newContact.name}
            type="text"
            className="m-1 col-4"
            name="name"
            onChange={handleValues}
            placeholder="Name"
        />
        <input
            value={newContact.phone}
            type="text"
            className="m-1 col-4"
            name="phone"
            onChange={handleValues}
            placeholder="Phone"
        />
        <input
            value={newContact.email}
            type="text"
            className="m-1 col-4"
            name="email"
            onChange={handleValues}
            placeholder="Email"
        />
        <input
            value={newContact.image}
            type="text"
            className="m-1 col-4"
            name="image"
            onChange={handleValues}
            placeholder="Image"
        />
        <Link to="/all-contacts">
            <button onClick={() => checkVal()} 
            className="btn btn-primary col-4">Add</button>
        </Link> 
    </div>
);
    }

export default AddContacts; 