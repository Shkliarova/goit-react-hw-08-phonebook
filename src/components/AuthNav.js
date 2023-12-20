import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div style={{marginLeft: 'auto'}}>
      <NavLink to="/register">
        <Button variant="outlined" color='inherit'>Register</Button>
      </NavLink>
      <NavLink to="/login">
        <Button variant="outlined" color='inherit' style={{marginLeft: '8px'}}>Log In</Button>
      </NavLink>
    </div>
  );
};