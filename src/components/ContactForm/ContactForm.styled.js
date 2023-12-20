import styled from "styled-components";
import {Form, Field, ErrorMessage} from "formik"

export const ContactsForm = styled(Form)`
display: flex;
gap: 4px;
flex-direction: column;`

export const ContactsField = styled(Field)`
margin-left: 4px;
border-color: #1976d2;
opacity: 50%;
width: 230px;
font-size: 18px;
text-indent: 8px;
border-radius: 5px;

&::placeholder{
    font-size: 18px;
    text-indent: 8px;
}`

export const FormError = styled(ErrorMessage)`
color: red;
margin: 0 auto;`