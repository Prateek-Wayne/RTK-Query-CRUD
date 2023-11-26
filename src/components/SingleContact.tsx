import React from 'react'
import contactApiType from '../model/contacts.types'

const SingleContact = ({ contact }: { contact: contactApiType }) => {
    return (
        <div key={contact.id}>
            <section key={contact.id} className="contact">
                <h2>{contact.name}</h2>
                <p>{contact.email}</p>
            </section>
        </div>
    )
}

export default SingleContact;