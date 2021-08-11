/**
 * Font creation form component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.11
 * @since 2021.08.09
 */

/*----- Imports --------------------------------------------------------------*/
import React, { useState } from 'react';
import { ErrorMessage, Form } from '../../elements';
import { fonts } from '../../api';

const FontForm = props => {
  /*----- State --------------------------------------------------------------*/
  const [state, setState] = useState({
    error: '',
    form: {
      name: '',
      copy: '',
      font: [],
    },
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
    handleFileInput = e => {
      setState({
        ...state,
        form: {
          ...state.form,
          font: e.target.files[0],
        },
      });
    },
    handleSubmit = e =>
      e.preventDefault() ||
      fonts
        .create(
          Object.keys(state.form).reduce(
            (acc, k) => acc.append(k, state.form[k]) || acc,
            new FormData()
          )
        )
        .catch(
          ({ error }) =>
            console.log(error) ||
            setState({
              ...state,
              error,
            })
        );

  return (
    <Form title="Upload Font" onSubmit={handleSubmit}>
      <input
        type="file"
        name="font"
        placeholder="Upload font..."
        onChange={handleFileInput}
        required
      />
      <Form.TextField
        label="Name"
        type="name"
        name="name"
        placeholder="Font Name"
        value={state.form.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="copy"
        placeholder="Talk about your font!"
        value={state.form.copy}
        onChange={handleChange}
      ></textarea>
      <Form.Button type="submit" value="Upload" />
      {state.error && <ErrorMessage error={state.error} />}
    </Form>
  );
};

export default FontForm;
