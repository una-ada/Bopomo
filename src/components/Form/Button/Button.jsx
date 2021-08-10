/**
 * Form button component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.09
 * @since 2021.08.09
 */

/*----- Imports --------------------------------------------------------------*/
import React from 'react';
import './Button.css';

const Button = props => (
  <input type="button" className="form__button" {...props} />
);

/*----- Exports --------------------------------------------------------------*/
export default Button;
