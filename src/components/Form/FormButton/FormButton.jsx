/**
 * Form button component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.09
 * @since 2021.08.09
 */

/*----- Imports --------------------------------------------------------------*/
import React from 'react';
import './FormButton.css';

const FormButton = props => (
  <input
    {...props}
    type="button"
    className="form__button"
  />
);

/*----- Exports --------------------------------------------------------------*/
export default FormButton;
