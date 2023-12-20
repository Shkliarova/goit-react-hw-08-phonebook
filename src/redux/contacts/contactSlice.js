import { createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContact, fetchContacts } from "./operations";

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null
    }
},
extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContacts.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;

        const { payload } = action;
        const isDuplicate = state.contacts.items.some((contact) =>
          contact.name.toLowerCase() === payload.name.toLowerCase() &&
          contact.number === payload.number
        );

        if (isDuplicate) {
          alert('This contact is already in your phonebook!');
        } else {
          state.contacts.items.push(payload);
        }
        
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      });
  },
}
)

export const contactsReducer = contactSlice.reducer;