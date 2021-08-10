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
    const { children } = this.props;
    return (
      <Card>
        <form {...this.props}>{children}</form>
      </Card>
    );
  }
}

Form.Button = Button;

/*----- Exports --------------------------------------------------------------*/
export default Form;
