import React from 'react';
import { Form } from '../../components/components';

const Login = () => {
  return (
    <Form title="Login">
      <Form.TextField
        label="E-mail"
        type="email"
        name="email"
        placeholder="you@example.com"
        required
      />
      <Form.TextField
        label="Password"
        type="password"
        name="password"
        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
        required
      />
      <Form.Button value="Login" />
    </Form>
  );
};

export default Login;
