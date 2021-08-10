/**
 * Signup page
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.09
 * @since 2021.08.09
 */

/*----- Imports --------------------------------------------------------------*/
import React, { useState } from 'react';
import { ErrorMessage, Form } from '../../components/components';
import userService from '../../utils/users';
import { Link, useHistory } from 'react-router-dom';

const Signup = props => {
  /*----- State --------------------------------------------------------------*/
  const [state, setState] = useState({
      error: '',
      form: {
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        bio: '',
      },
      file: '',
    }),
    history = useHistory();

  /*----- Handler Functions --------------------------------------------------*/
  const handleChange = e =>
      setState({
        ...state,
        form: {
          ...state.form,
          [e.target.name]: e.target.value,
        },
      }),
    handleFileInput = e =>
      setState({
        ...state,
        file: e.target.files[0],
      }),
    handleSubmit = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('photo', state.file);
      for (let k in state.form) formData.append(k, state.form[k]);
      try {
        await userService.signup(formData);
        props.handleSignUpOrLogin();
        history.push('/');
      } catch (err) {
        console.error(err.message);
        setState({
          ...state,
          error: err.message,
        });
      }
    };

  /*----- Template -----------------------------------------------------------*/
  return (
    <Form title="Signup" onSubmit={handleSubmit}>
      <Form.TextField
        label="Username"
        type="text"
        name="username"
        placeholder="Username"
        value={state.form.username}
        onChange={handleChange}
        required
      />
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
      <textarea
        label="bio"
        name="bio"
        placeholder="Tell people about yourself..."
        onChange={handleChange}
      ></textarea>
      <input
        type="file"
        name="photo"
        placeholder="Upload Image"
        onChange={handleFileInput}
        required
      />
      <Form.Button type="submit" value="Signup" />
      {state.error && <ErrorMessage error={state.error} />}
      <p>Already have an account? <Link to="/login">Login!</Link></p>
    </Form>
  );
};

/*----- Exports --------------------------------------------------------------*/
export default Signup;
