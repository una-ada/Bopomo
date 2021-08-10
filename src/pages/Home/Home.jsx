import React from 'react';
import { Form } from '../../components/components';

const Home = props => {
  return (
    <Form>
      <input type="email" name="email" required />
      <input type="password" name="password" />
      <input type="password" name="passwordConfirm" />
      <Form.Button value="Signup" />
    </Form>
  );
};

export default Home;
