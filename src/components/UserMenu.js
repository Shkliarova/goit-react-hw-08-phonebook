import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { Typography, Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div style={{display: "flex", marginLeft: "auto", gap: "8px"}}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Welcome, {user.name}</Typography>
      <Button variant="outlined" color='inherit' type="button" onClick={() => dispatch(logOut())}>Logout</Button>
    </div>
  );
};