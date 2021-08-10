/**
 * Form Component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.09
 * @since 2021.08.09
 */

/*----- Imports --------------------------------------------------------------*/
import React, { Component } from 'react';
import { Card } from '../components';
import Button from './Button/Button';
import TextField from './TextField/TextField';
import './Form.css';

class Form extends Component {
  render() {
    const { children, title, ...rest } = this.props;
    return (
      <Card>
        <Card.Title>{title}</Card.Title>
        <form className="card__form" {...rest}>
          {children}
        </form>
      </Card>
    );
  }
}

Object.assign(Form, { Button, TextField });

/*----- Exports --------------------------------------------------------------*/
export default Form;
