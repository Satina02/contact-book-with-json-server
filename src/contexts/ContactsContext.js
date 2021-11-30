import React, { useReducer } from "react";
import axios from "axios";
export const ContactsContext = React.createContext() //создаем контекст
const API = "http://localhost:8005/contacts";

const INIT_STATE = {
  contacts: [],
  details: null,
};
const reducer = (state = INIT_STATE, action) => {
  // создаем кейсы
  switch (action.type) {
    case "GET_CONTACTS":
      return {
        ...state,
        contacts: action.payload.data,
      };
    case "GET_DETAILS":
      return {
        ...state,
        details: action.payload.data,
      };
    default:
      return state;
  }
};
const ContactsСontextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const createContact = async (newContact) => {
    await axios.post(API, newContact);
    getContacts();
  };
  async function getContacts() {
    let res = await axios.get(API);
    console.log('res from axios', res);
    dispatch({
      type: "GET_CONTACTS",
      payload: res,
    });
  }
  async function getDetails(id) {
    let res = await axios.get(`${API}/${id}`);
    console.log(res);
    dispatch({
      type: "GET_DETAILS",
      payload: res
    })
  }
  async function deleteContact(id){
    await axios.delete(`${API}/${id}`)
    getContacts()
  }

  return (
    <ContactsContext.Provider
      value={{
        contacts: state.contacts,
        details: state.details,
        getContacts,
        createContact,
        getDetails,
        deleteContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsСontextProvider; 