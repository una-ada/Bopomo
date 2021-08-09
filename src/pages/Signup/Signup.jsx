import React, { useState } from 'react';
import './Signup.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import userService from '../../utils/users';
import { useHistory } from 'react-router-dom';

const Signup = props => {
  const [error, setError] = useState('');

  return (
    <form>
      <h1>Signup</h1>
      <input type="text" name="username" placeholder="Username" required />
      <input type="email" name="email" placeholder="E-mail" />
      <input type="password" name="password" placeholder="Password" required />
      <input
        type="password"
        name="passwordConfirmation"
        placeholder="Confirm Password"
      />
      <textarea
        label="bio"
        name="bio"
        placeholder="Tell people about yourself..."
      ></textarea>
      <input type="file" name="photo" placeholder="Upload Image" required />
      <input type="submit" className="btn" value="Signup" />
      {error && <ErrorMessage error={error} />}
    </form>
  );
};

export default Signup;
