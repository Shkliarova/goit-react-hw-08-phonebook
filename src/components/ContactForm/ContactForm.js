import {Formik} from "formik"
import * as Yup from 'yup';
import { ContactsForm, ContactsField, FormError } from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux"
import { addContacts } from "../../redux/contacts/operations";
import { Button } from "@mui/material";
import { selectContacts } from "../../redux/contacts/selectors";

const contactSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/g, 'Number format: xxx-xx-xx')
    .required('Required')
})

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts)

    return(
        <Formik initialValues={{
            name: '',
            number: ''
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
            const isDuplicate = contacts.some((contact) =>
            contact.name.toLowerCase() === values.name.toLowerCase() ||
            contact.number === values.number
        );

        if (isDuplicate) {
          alert('This contact is already in your phonebook!');
          actions.resetForm();
        } else{
            dispatch(addContacts(values));
            actions.resetForm();
        }
        }}>
            <ContactsForm>
                <div style={{display: "flex", gap: "8px"}}>
                <ContactsField type="text" name="name" required />
                <ContactsField type="tel" name="number" placeholder="xxx-xx-xx" required/>
                <Button variant="contained" type="submit" style={{marginLeft: "auto"}}>Add contact </Button>
                </div>
                <FormError name="number" component="span"/>
            </ContactsForm>
        </Formik>
    )
}