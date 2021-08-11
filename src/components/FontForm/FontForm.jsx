/**
 * Font creation form component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.10
 * @since 2021.08.09
 */

/*----- Imports --------------------------------------------------------------*/
import React, { useState } from 'react';
import { ErrorMessage, Form } from '../../elements';

const FontForm = props => {
  /*----- State --------------------------------------------------------------*/
  const [state, setState] = useState({
    error: '',
    form: {
      name: '',
      copy: '',
    },
    file: '',
  });

  /*----- Handler Functions --------------------------------------------------*/
  const handleChange = e =>
      setState({
        ...state,
        form: {
          ...state.form,
          [e.target.name]: e.target.value,
        },
      }),
    handleSubmit = e => {
      e.preventDefault();
      /*
      auth
        .signup(state.form)
        .catch(
          ({error}) =>
            console.log(error) ||
            setState({
              ...state,
              error: error.split(':').pop(),
            })
        );
      */
    };

  return <Form title="Upload Font" onSubmit={handleSubmit}></Form>;
};

export default FontForm;
