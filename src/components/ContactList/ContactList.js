import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { ContactsList } from "./ContactList.styled"
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { Button } from "@mui/material";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);

    return(
        <ContactsList>
            {contacts.map(item => 
            <li key={item.id} style={{fontSize: "large"}}>
                {item.name}: <i>{item.number}</i>
                <Button variant="contained" size="small" onClick={()=>dispatch(deleteContact(item.id))}
                style={{marginLeft: "16px"}}>delete</Button>
            </li>)}
        </ContactsList>
    )
}