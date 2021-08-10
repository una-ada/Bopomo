import React from 'react';
import { Form } from '../../components/components';

const Home = props => {
  return (
    <Form title="Signup">
      <Form.TextField type="email" name="email" required />
      <Form.TextField type="password" name="password" />
      <Form.TextField type="password" name="passwordConfirm" />
      <Form.Button value="Signup" />
    </Form>
  );
};

export default Home;
