import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import contactApiType from "../model/contacts.types";


export const contactsApi=createApi({
    reducerPath: 'contactsApi',
    baseQuery:fetchBaseQuery({baseUrl:" http://localhost:3006"}),
    tagTypes:["Contact"],
    endpoints: (builder)=>({
        contacts: builder.query<contactApiType[],void>({
            query: () => '/contacts',
            providesTags:["Contact"]
        }),
        addContact:builder.mutation<void,contactApiType>({
            query:(contact)=>({
                url:'/contacts',
                method:"POST",
                body:contact
            }),
            invalidatesTags:["Contact"]
        }),
        updateContact:builder.mutation<void,contactApiType>({
            query:({id,...rest})=>({
                url:`/contacts/${id}`,
                method:"PUT",
                body:rest
            }),
            invalidatesTags:["Contact"]
        }),
        deleteContact:builder.mutation<void,number>({
            query:(id)=>({
                url:`/contacts/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Contact"]
        }),
        
    })
})
export const {useContactsQuery,useAddContactMutation,useUpdateContactMutation,useDeleteContactMutation} = contactsApi;