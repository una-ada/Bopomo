/**
 * Signup page
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.10
 * @since 2021.08.09
 */

/*----- Imports --------------------------------------------------------------*/
import React, { useState } from 'react';
import { ErrorMessage, Form } from '../../lib/lib';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/auth';

const Signup = props => {
  /*----- State --------------------------------------------------------------*/
  const [state, setState] = useState({
      error: '',
      form: {
        email: '',
        password: '',
        passwordConfirm: '',
      },
    }),
    auth = useAuth();

  /*----- Handler Functions --------------------------------------------------*/
  const handleChange = e =>
      setState({
        ...state,
        form: {
          ...state.form,
          [e.target.name]: e.target.value,
        },
      }),
    handleSubmit = async e => {
      e.preventDefault();
      auth
        .signup(state.form)
        .catch(
          ({error}) =>
            console.log(error) ||
            setState({
              ...state,
              error: error.split(':').pop(),
            })
        );
    };

  /*----- Template -----------------------------------------------------------*/
  return (
    <Form title="Signup" onSubmit={handleSubmit}>
      <Form.TextField
        label="E-mail"
        type="email"
        name="email"
        placeholder="E-mail"
        value={state.form.email}
        onChange={handleChange}
        required
      />
      <Form.TextField
        label="Password"
        type="password"
        name="password"
        placeholder="Password"
        value={state.form.password}
        onChange={handleChange}
        required
      />
      <Form.TextField
        label="Confirm Password"
        type="password"
        name="passwordConfirm"
        placeholder="Confirm Password"
        value={state.form.passwordConfirm}
        onChange={handleChange}
        required
      />
      <Form.Button type="submit" value="Signup" />
      {state.error && <ErrorMessage error={state.error} />}
      <p>
        Already have an account? <Link to="/login">Login!</Link>
      </p>
    </Form>
  );
};

/*----- Exports --------------------------------------------------------------*/
export default Signup;
