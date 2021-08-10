import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ErrorMessage, Form } from '../../components/components';
import { useAuth } from '../../utils/auth';

const Login = () => {
  /*----- State --------------------------------------------------------------*/
  const [state, setState] = useState({
      error: '',
      form: {
        email: '',
        password: '',
      },
    }),
    history = useHistory(),
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
      const form = new FormData();
      for (let k in state.form) form.append(k, state.form[k]);
      auth
        .login(form)
        .then(() => history.push('/'))
        .catch(err => {
          console.error(err.message);
          setState({
            ...state,
            error: err.message,
          });
        });
    };

  /*----- Template -----------------------------------------------------------*/
  return (
    <Form title="Login" onSubmit={handleSubmit}>
      <Form.TextField
        label="E-mail"
        type="email"
        name="email"
        placeholder="you@example.com"
        value={state.form.email}
        onChange={handleChange}
        required
      />
      <Form.TextField
        label="Password"
        type="password"
        name="password"
        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
        value={state.form.password}
        onChange={handleChange}
        required
      />
      <Form.Button type="submit" value="Login" />
      {state.error && <ErrorMessage error={state.error} />}
    </Form>
  );
};

export default Login;
