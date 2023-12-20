import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        <Button variant='text' color='inherit'>Home</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Button variant='text' color='inherit'>Contacts</Button>
        </NavLink>
      )}
    </nav>
  );
};
