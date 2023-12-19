import { selectContacts, selectError, selectIsLoading } from "../../redux/contacts/selectors"
import { ContactForm } from "../../components/ContactForm/ContactForm"
import { ContactList } from "../../components/ContactList/ContactList"
import { Filter } from "../../components/Filter/Filter"
import { AppWrapper } from "./Contacts.styled"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations"

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return(
      <AppWrapper>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        {contacts.length > 0 && <ContactList />}
      </AppWrapper>
    )
  }