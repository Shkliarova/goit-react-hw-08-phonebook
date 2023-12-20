import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import { TextField, Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" style={{display: "flex",
      gap: "8px",
      flexDirection: "column",
      border: "1px solid #1976d2",
      boxShadow: "5px 5px 10px #1976d2",
      padding: "15px",
      width: "500px",
      margin: "10% auto"}}>
      <TextField id="standard-basic" label="Username" variant="standard" type="text" name="name"/>
      <TextField id="standard-basic" label="Email" variant="standard" type="email" name="email"/>
      <TextField id="standard-basic" label="Password" variant="standard" type="password" name="password"/>
      <Button variant="contained" type="submit" style={{marginTop: "24px"}}>Register</Button>
    </form>
  );
};