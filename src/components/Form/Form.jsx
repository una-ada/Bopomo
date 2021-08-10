/**
 * Form Component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.09
 * @since 2021.08.09
 */

/*----- Imports --------------------------------------------------------------*/
import React, { Component } from 'react';
import { Card } from '../components';
import Button from './FormButton/FormButton';

class Form extends Component {
  render() {
    const { children, title, ...rest } = this.props;
    return (
      <Card>
        <Card.Title>{title}</Card.Title>
        <form {...rest}>{children}</form>
      </Card>
    );
  }
}

Form.Button = Button;

/*----- Exports --------------------------------------------------------------*/
export default Form;
