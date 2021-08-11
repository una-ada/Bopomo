/**
 * Form text area component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.11
 * @since 2021.08.11
 */

/*----- Imports --------------------------------------------------------------*/
import React, { Component } from 'react';
import autosize from 'autosize';
import './TextArea.css';

class TextArea extends Component {
  componentDidMount(){
    autosize(this.textarea);
  }
  render() {
    const { label, ...props } = this.props;
    return (
      <>
        {label && <label className="form__label">{label}</label>}
        <textarea
          className="form__textarea"
          ref={c => (this.textarea = c)}
          {...props}
        ></textarea>
      </>
    );
  }
}

/*----- Exports --------------------------------------------------------------*/
export default TextArea;
