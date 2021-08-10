/**
 * Nav bar component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.10
 * @since 2021.08.10
 */

/*----- Imports --------------------------------------------------------------*/
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../utils/auth';
import './Nav.css';

const Nav = () => {
  const auth = useAuth();
  return (
    <nav>
      {auth.user ? (
        <button onClick={auth.logout}>Logout</button>
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </nav>
  );
};

export default Nav;
