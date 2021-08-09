/**
 * Form Component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.09
 * @since 2021.08.09
 */
/*----- Imports --------------------------------------------------------------*/
import React, { Component } from 'react';
import Button from './Button/Button';

class Form extends Component {
  render() {
    const { children } = this.props;
    return <form>{children}</form>;
  }
}

Form.Button = Button;

/*----- Exports --------------------------------------------------------------*/
export default Form;
