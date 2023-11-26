import React from 'react'

import { useSelector } from 'react-redux'

import { useContactsQuery } from './services/contactsApi'
import contactApiType from './model/contacts.types';
import SingleContact from './components/SingleContact';
import AddContacts from './components/AddContacts';
const App = () => {
  const { isLoading, isError, isFetching, isSuccess, data, error } = useContactsQuery();
  return (
    <>
      {isLoading && <h1>..Loading</h1>}
      {isFetching && <h1> ..Fetching</h1>}
      {isError && <h1>..Error</h1>}
      {isSuccess && <h1>Date Fetched Successfully...</h1>}
      {isSuccess && data.map((i:contactApiType)=>{
        return(
         <SingleContact key={i.id} contact={i} />
        )
      })}
       <AddContacts/>
    </>
  )
}

export default App