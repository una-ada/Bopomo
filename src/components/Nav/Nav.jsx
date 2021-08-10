/**
 * Header component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.10
 * @since 2021.08.10
 */

/*----- Imports --------------------------------------------------------------*/
import React from 'react';
import { useAuth } from '../../utils/auth';
import './Nav.css';

const Nav = () => {
  const auth = useAuth();
  return <nav>
    {auth.user ? 'Logout' : 'Login'}
  </nav>;
};

export default Nav;