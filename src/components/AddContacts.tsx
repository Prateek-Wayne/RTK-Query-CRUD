import React from 'react'
import { useAddContactMutation ,useUpdateContactMutation,useDeleteContactMutation } from '../services/contactsApi'
import contactApiType from '../model/contacts.types';

const AddContacts = () => {
    const [addContact]=useAddContactMutation();
    const[updateContact]=useUpdateContactMutation();
    const[deleteContact]=useDeleteContactMutation();
    const newContact:contactApiType={
        id:3,
        name:"Rajpal",
        email:"rajpal@gmail.com"
    };
    const updatedContact:contactApiType={
        id:3,
        name:"Rajpal Yadav",
        email:"rajpal@gmail.com"
    };
    
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
        <button onClick={async()=>{await addContact(newContact)}}>Add Me</button>
        <button onClick={async()=>{await updateContact(updatedContact)}}>Update Me</button>
        <button onClick={async()=>{await deleteContact(3)}}>Delete Me</button>
    </div>
  )
}

export default AddContacts