import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ContactsСontextProvider from "./contexts/ContactsContext";
import Header from './Header/Header'
import AddContacts from './AddContacts/AddContacts';
import ListContacts from './ListContacts/ListContacts'
import Detail from './Detail/Detail'

const App = () => {
  return (
    <div>
      <ContactsСontextProvider>
      <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path='/' element={<h1></h1>} />  
        <Route path='/all-contacts' element={<ListContacts /> } />
        {/* <Route path='/all-contacts/:id' element={<Detail />} />  */}
        <Route path='/add-contacts:id' element={<AddContacts />} />
      </Routes>
      </BrowserRouter>
      </ContactsСontextProvider>
    </div>
  );
};

export default App; 
