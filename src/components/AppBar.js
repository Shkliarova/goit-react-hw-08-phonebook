import { Navigation } from '../components/Navigation';
import { UserMenu } from '../components/UserMenu';
import { AuthNav } from '../components/AuthNav';
import { useAuth } from '../hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};